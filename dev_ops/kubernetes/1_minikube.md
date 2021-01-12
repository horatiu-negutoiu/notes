# Kubernetes / Install

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
