# Kubernetes / Installation

## Locally using kubeadm

https://www.linuxtechi.com/install-kubernetes-on-ubuntu-22-04/
Followed this but modified a little.

See Appendix A for more docs.

) Log in as root
```
$ sudo su -
```

### Disable firewall, swap & add kernel settings (both kmaster and kworkers)
```bash
# disable firewall
$ ufw disable
Firewall stopped and disabled on system startup

# disable swap
$ swapoff -a
$ sed -i '/swap/d' /etc/fstab
# check /etc/fstab to see if the /swap partition is still there
# if it is, remove it manually or update the command above and try again
$ swapon --show
# should not show anything now

$ tee /etc/modules-load.d/containerd.conf <<EOF
overlay
br_netfilter
EOF
$ modprobe overlay
$ modprobe br_netfilter

$ tee /etc/sysctl.d/kubernetes.conf <<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF

$ sysctl --system
```

### Install containerd run time (both kmaster and kworkers)
```bash
# install dependencies
$ apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates

# enable docker repository
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg
$ add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# install containerd
$ apt update
$ apt install -y containerd.io=1.7.23-1
# old command: $ apt install -y containerd.io=1.6.10-1
$ apt-mark hold containerd.io

# configure containerd so that it uses systemd as cgroup
$ containerd config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1
$ sed -i 's/SystemdCgroup \= false/SystemdCgroup \= true/g' /etc/containerd/config.toml
# changes /etc/containerd/config.toml:125  SystemdCgroup = false   to   SystemdCgroup = true

# restart and enable containerd service
$ systemctl restart containerd # this restarts the service
$ systemctl enable containerd # should be already activated by this point
$ systemctl status containerd # ensure the service is active (running)
```

### Install Kubernetes (both kmaster and kworkers)
```bash
# add the kubernetes repository
$ echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
$ curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# install kubernetes
$ apt update
$ apt install -y kubelet=1.28.15-1.1 kubeadm=1.28.15-1.1 kubectl=1.28.15-1.1
$ apt-mark hold kubelet kubeadm kubectl
```

### Initialize MASTER node (control-plane, kmaster only)
```bash
# ensure the to-be control plane's ip address is correct
$ ip address # ex: inet 192.168.1.165/24
# use it for initialization
$ kubeadm init --apiserver-advertise-address=192.168.3.101 --pod-network-cidr=10.0.0.0/16  --ignore-preflight-errors=all

# COPY THE JOIN COMMAND

# EXIT SUDO
exit

# copy the cluster config
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config

# get cluster info to ensure it's running
$ kubectl cluster-info
Kubernetes control plane is running at https://192.168.3.101:6443
CoreDNS is running at https://192.168.3.101:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

# list nodes
$ kubectl get nodes
NAME   STATUS     ROLES           AGE     VERSION
ant    NotReady   control-plane   2m39s   v1.25.4
# nodes are not ready because we need a pod network
```

### Install the Calico Pod Network (kmaster only)

) Install the tigera Calico operator:
```bash
$ kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.29.1/manifests/tigera-operator.yaml
... created
... created
```

) Install Calico by creating the necessary custom resource

```bash
# this updated yaml includes modifications to the IP pool CIDR
# downloaded from https://raw.githubusercontent.com/projectcalico/calico/v3.29.1/manifests/custom-resources.yaml
$ tee ~/calico.yaml <<EOF
apiVersion: operator.tigera.io/v1
kind: Installation
metadata:
  name: default
spec:
  # Configures Calico networking.
  calicoNetwork:
    ipPools:
    - blockSize: 26
      cidr: 10.0.0.0/16
      encapsulation: VXLANCrossSubnet
      natOutgoing: Enabled
      nodeSelector: all()
---
# This section configures the Calico API server.
# For more information, see: https://docs.tigera.io/calico/latest/reference/installation/api#operator.tigera.io/v1.APIServer
apiVersion: operator.tigera.io/v1
kind: APIServer 
metadata: 
  name: default 
spec: {}
EOF

$ kubectl create -f calico.yaml
installation.operator.tigera.io/default created
apiserver.operator.tigera.io/default created

# ensure that all the pods are running:
$ watch kubectl get pods -n calico-system
# NAME                                       READY   STATUS    RESTARTS   AGE
# calico-kube-controllers-6786bb67ff-zw4rc   1/1     Running   0          3m10s
# calico-node-fvw96                          1/1     Running   0          3m10s
# calico-typha-95f888f84-lhqzv               1/1     Running   0          3m11s
# csi-node-driver-d6xcp                      2/2     Running   0          3m10
```

) Optional: for a single-cluster system, remove the taints on the master node:
```bash
$ kubectl taint nodes --all node-role.kubernetes.io/control-plane- node-role.kubernetes.io/master-
node/<your-hostname> untainted

$ kubectl get nodes -o wide
NAME   STATUS   ROLES           AGE   VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
ant    Ready    control-plane   18m   v1.28.15   192.168.3.101   <none>        Ubuntu 24.04.1 LTS   6.8.0-48-generic   containerd://1.7.23
```


### Initialize WORKER nodes (kworkers only)

In case the join command is lost, run this on the kmaster:
```bash
$ kubeadm token create --print-join-command --v=5
```

Sudo run the `kubeadm join` command copied from the master node:
```bash
$ sudo kubeadm join 192.168.3.101:6443 --token ...
This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.
Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
```

Check, on kmaster:
```bash
$ kubectl get nodes -o wide
NAME   STATUS   ROLES           AGE   VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
ant    Ready    control-plane   34m   v1.28.15   192.168.3.101   <none>        Ubuntu 24.04.1 LTS   6.8.0-48-generic   containerd://1.7.23
bee    Ready    <none>          58s   v1.28.15   192.168.3.102   <none>        Ubuntu 24.04.1 LTS   6.8.0-48-generic   containerd://1.7.23
```

Done!


## Appendix A - More Documentation

https://www.linuxtechi.com/install-kubernetes-on-ubuntu-22-04/
https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/
https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl
https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#initializing-your-control-plane-node
there's some info here on version skews - kubectl and the control plane cannot differ by more than one _minor_ version.
https://docs.projectcalico.org/getting-started/kubernetes/quickstart
https://github.com/justmeandopensource/kubernetes/blob/master/docs/install-cluster-ubuntu-20.md#on-kmaster


## kubectx and kubens

### Install on MacOS

```
$ brew install kubectx
# zsh auto-completion scripts will be added automatially
```

### Installation on Ubuntu

```
wget https://github.com/ahmetb/kubectx/blob/master/kubectx
wget https://github.com/ahmetb/kubectx/blob/master/kubens
chmod +x kubectx
chmod +x kubens
sudo mv kubectx /usr/local/bin
sudo mv kubens /usr/local/bin
```

Then add the auto-completion scripts.
