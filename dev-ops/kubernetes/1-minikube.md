# Kubernetes / Minikube Install

**Note**

Minikube installs the Kubernetes cluster in a virtual box. This means:
- the cluster is not (easily) accessible from the outside, and
- it will suffer the usual penalties of running VMs

Docs:
https://phoenixnap.com/kb/install-minikube-on-ubuntu

## Minikube

```
$ sudo apt-get update -y
$ sudo apt-get upgrade -y
$ sudo apt-get install -y curl apt-transport-https
$ wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
$ sudo cp minikube-linux-amd64 /usr/local/bin/minikube
$ sudo chmod 755 /usr/local/bin/minikube
$ minikube version
```

## Docker

Follow the Docker installation instructions.

## Start Minikube

```
$ minikube start
```

This command should pull the image. If there's an error message along the lines of `Exiting due to DRV_NOT_DETECTED...`, docker hasn't been added as a driver properly (maybe docker must be made accessible from non-root users?).

## Other Minikube Commands

Ssh into the Minikube VM:
```
$ minikube ssh
```

Check minikube status:
```
$ minikube status
```

Check minikube addons list:
```
$ minikube addons list
```

Access Minikube dashboard:
```
$ minikube dashboard
```

Stop single node cluster:
```
$ minikube stop
```


## Minikube Uninstall

Docs
https://medium.com/@yudapramad/uninstall-minikube-5c032a7dd44f

On Linux
```
minikube stop; minikube delete
docker stop (docker ps -aq)
rm -r ~/.kube ~/.minikube
sudo rm /usr/local/bin/localkube /usr/local/bin/minikube
systemctl stop '*kubelet*.mount'
sudo rm -rf /etc/kubernetes/
docker system prune -af --volumes
```

On MacOS:
```
minikube stop; minikube delete &&
docker stop $(docker ps -aq) &&
rm -rf ~/.kube ~/.minikube &&
sudo rm -rf /usr/local/bin/localkube /usr/local/bin/minikube &&
launchctl stop '*kubelet*.mount' &&
launchctl stop localkube.service &&
launchctl disable localkube.service &&
sudo rm -rf /etc/kubernetes/ &&
docker system prune -af --volumes
```
