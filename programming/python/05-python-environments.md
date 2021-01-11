# Python Environments

## First things first: pyenv

Source:
https://www.liquidweb.com/kb/how-to-install-pyenv-on-ubuntu-18-04/

$ sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl

$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv

$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n eval "$(pyenv init -)"\nfi' >> ~/.zshrc






#### OLD INSTALL ####
## Prerequisites - Python 3.6

```shell
$ sudo apt-get install -y python3-pip build-essential libssl-dev libffi-dev python-dev python3-venv
```

## Creating Environments

```shell
$ python3 -m venv my_env
```

## Activating Environments

```shell
$ source my_env/bin/activate
```

...and we get...

```shell
(my_env) horatiu@horatiu:~/environments
```

# Prerequisites - Python 3.8

```
$ sudo apt-get -y install liblapack-dev libblas-dev gfortran
```
