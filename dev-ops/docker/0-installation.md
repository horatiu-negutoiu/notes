# Installation

### Remove any old Docker versions

```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
$ sudo apt-get purge docker-ce docker-ce-cli containerd.io
$ sudo rm -rf /var/lib/docker
```

https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine

### Install using the repository

<https://docs.docker.com/install/linux/docker-ce/ubuntu/>

```bash
$ sudo apt-get update
$ sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

$ sudo mkdir -p /etc/apt/keyrings
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

$ sudo apt-get update

$ sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

$ sudo docker run hello-world
```

### Post installtion steps for Linux

We want to manage Docker as a non-root user (ie. without having to run sudo).

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

