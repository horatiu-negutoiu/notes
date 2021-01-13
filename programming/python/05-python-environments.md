# Python Environments

Pyenv and Pipenv are a solid combination together. Pyenv allows setting of desired python versions by specifying it in a `.python-version` file. Pipenv then will create a virtual environment, using that python version, along with locking down of package versions.

As an added bonus, installing Oh-My-Zsh along with a nice theme can be a nice bonus to a clean, stable, predictable environment.

## First things first: pyenv

Source:
https://www.liquidweb.com/kb/how-to-install-pyenv-on-ubuntu-18-04/

```
$ sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl

$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv

$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n eval "$(pyenv init -)
```

## Next: Pipenv

Open a Terminal, make sure no python environment is active.
```
$ which python3  # should be the /usr/bin python ie. the system one
$ pip3 install pipenv  # might have to use pip3 instead of pip here, when two versions of python are installed

# pipenv gets installed into the system
```

## Finally: Creating environments

```
# either from an existing Pipfile
$ pipenv install
# or create a new Pipfile
$ pipenv install package==0.0.0

$ pipenv shell  # activate the env
(activated-env) $ pip install pipenv  # install pipenv again into that environment.
#                                       this will get rid of any pipenv inconsistencies between your "system" pipenv and your "environment" python

(activated-env) $ which pipenv  # should point into the environment, not into the system
```

Last step is to set up the interpreter to point into the new environment. This way, every time a new terminal window is launched, it automatically activates the environment.









#### OLD INSTALL - virtualenv ####
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
