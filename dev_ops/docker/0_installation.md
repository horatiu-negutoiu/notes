# Installation

### Remove any old Docker versions

```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

### Install using the repository

<https://docs.docker.com/install/linux/docker-ce/ubuntu/>

```bash
$ sudo apt-get update
$ sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
# verify that there is a key that ends in those 8 characters
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt-get update
$ sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

### Post installtion steps for Linux

<https://docs.docker.com/install/linux/linux-postinstall/>

```bash
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
# log out and log back in then test without sudo:
$ docker run hello-world
```

There shouldn't be error messages of the type `Got permission denied while trying to connect to the Docker daemon socket ...`

### Configure Docker to start on boot

```bash
$ sudo systemctl enable docker
```

