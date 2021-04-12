# Kubernetes / Installation

## Locally using kubeadm

Pre-flight checks:

) Disable swap:
```
$ sudo swapoff -a
```
) Run the following instructions as `suso su`

Docs:
https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/
https://github.com/justmeandopensource/kubernetes/blob/master/docs/install-cluster-ubuntu-20.md
https://docs.projectcalico.org/getting-started/kubernetes/quickstart

Disable Firewall
```
$ ufw disable
```

Disable swap
```
$ swapoff -a; sed -i '/swap/d' /etc/fstab
```

Update sysctl settings for Kubernetes networking
```
$ cat >>/etc/sysctl.d/kubernetes.conf<<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
# normally, this would require a restart, but the command below reloads the config

$ sysctl --system
```

Install docker engine
```
$ apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
$ add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ apt update
$ apt install -y docker-ce=5:19.03.10~3-0~ubuntu-focal containerd.io
```

Kubernetes Setup
Add Apt repository
```
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" > /etc/apt/sources.list.d/kubernetes.list
```

Install Kubernetes components
```
$ apt update && apt install -y kubeadm=1.18.5-00 kubelet=1.18.5-00 kubectl=1.18.5-00
```

On kmaster
Initialize Kubernetes Cluster
```
$ kubeadm init --pod-network-cidr=192.168.0.0/16  --ignore-preflight-errors=all
```

Deploy Calico network
```
$ kubectl --kubeconfig=/etc/kubernetes/admin.conf create -f https://docs.projectcalico.org/v3.14/manifests/calico.yaml
```

Cluster join command
```
$ kubeadm token create --print-join-command
# to be used by joining nodes
```

**To be able to run kubectl commands as non-root user**
If you want to be able to run kubectl commands as non-root user, then as a non-root user perform these
```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

**To be able to run commands from another computer**
```
scp root@<lan-ip>:~/.kube/config ~/.kube/config
# watch out not to override your existing config file
# maybe first copy it somewhere else locally instead
```

To merge the config files:
- copy the remote `config` file somewhere else
- open copied `config` file with editor
- open `~/.kube/config` file with editor
- copy `cluster`, `context`, `user` from first config to second, give them relevant names
- save and close

Test with
```
$ kubectl cluster-info
```


### Uninstall Kubernetes

```
$ kubeadm reset
$ sudo apt-get purge kubeadm kubectl kubelet kubernetes-cni kube*   
$ sudo apt-get autoremove  
$ sudo rm -rf ~/.kube
```
And restart the computer.


## Kubectl

Installation:
```
$ curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
$ chmod +x ./kubectl
$ sudo mv ./kubectl /usr/local/bin/kubectl
$ kubectl version -o json
```

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
