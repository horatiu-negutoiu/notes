# Kubernetes / Microk8s

Microk8s can be installed with the ubuntu server default install.

Display configuration
```
$ microk8s.config
```

Boot up dashboard
```
$ microk8s.dashboard-proxy
```

Cluster manager
```
$ microk8s.kubectl [flags] [options]
```

Display cluster info aka. proxied links:
```
$ microk8s.kubectl cluster-info
```

Display all systems
```
$ microk8s.kubectl get all --all-namespaces
```

Expose a service on port 80 using NodePort
```
$ microk8s.kubectl expose deployment microbot --type=NodePort --port=80 --name=microbot-service
```


## Microk8s installation on cluster

On both computers:
```bash
$ sudo snap install microk8s --classic
```

Add the microk8s executable to the PATH
```bash
nano ~/.bashrc
```

Add `export PATH=$PATH:/snap/bin` to the end, then:
```bash
$ source .bashrc
```

Allow the current user to access microk8s:
```bash
sudo usermod -a -G microk8s $(whoami)
mkdir .kube
sudo chown -R $(whoami) ~/.kube
newgrp microk8s
```

On control plane:
``` bash
# tell the control plane computer not to schedule jobs here
$ microk8s kubectl taint nodes $(hostname) node-role.kubernetes.io/master=:NoSchedule

# get the join command
microk8s add-node
# copy the command with the --worker at the end
```

On the worker node:
```bash
# add the worker node
$ microk8s join <ip>:<port>/<token> --worker
```

Verify setup:
```bash
$ microk8s status --wait-ready

# to see all participating nodes:
$ microk8s kubectl get nodes
```


### Enabled addons

Dashboard
```bash
$ microk8s enable dashboard

$ microk8s dashboard-proxy
# use the provided token to access the dashboard :10443
```

Ingress
```bash
$ microk8s enable ingress
```





