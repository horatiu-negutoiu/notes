# Python Environments

Pyenv and Pipenv are a solid combination together. Pyenv allows setting of desired python versions by specifying it in a `.python-version` file. Then, Pipenv will create a virtual environment, using that python version, along with locking down of package versions.

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

### Type 1: New project, new Pipfile.

```
# create a directory
$ mkdir project-name

# decide on python version
$ touch .python-version
$ nano .python-version
# fill in with desired MAJOR.MINOR.PATCH version, save and close
# check with
$ python -V
MAJOR.MINOR.PATCH          # but not the system one, the .python-version one

# create an environment using pipenv, but specify python version
# ensure python version matches the MAJOR.MINOR version from the .python-version file
$ pipenv install --python 3.8
# returns
Virtualenv location: /Users/user.name/.local/share/virtualenvs/project-name-Rh9gqIPi

# activate the environment
$ pipenv shell
# also good idea at this point to setup your interpreter in your favourite IDE

# BUT,
$ (project-name) which pipenv
# returns..
/Users/user.name/.pyenv/shims/pipenv
# which isn't wanted - this is the "system" version of pipenv

# install pipenv inside the environment in order to play nice with the environment's python version
$ (project-name) pip install pipenv

# now,
$ (project-name) which pipenv
# returns
/Users/user.name/.local/share/virtualenvs/project-name-Rh9gqIPi/bin/pipenv

# success!
# this setup guards against package installation errors, where the pipenv version doesn't match the working python version
```

### Type 2: Existing Pipfile

Assumptions:

- there is no `.python-version` file to force the python version
- there is no other environment installed matching this project's location

```
# open a new Terminal, cd into the Pipfile directory
$ cd project-name

# some preliminary checks
$ which python
/Users/user.name/.pyenv/shims/python
$ python -V
Python 2.7.16
$ python3 -V
Python 3.8.6
$ which pipenv
/Users/user.name/.pyenv/shims/pipenv

# install the environment
$ pipenv install
Using /usr/local/bin/python3.8 (3.8.6) to create virtualenv…
Virtualenv location: /Users/user.name/.local/share/virtualenvs/project-name-Rh9gqIPi
# the system's pipenv used the info inside the Pipfile to force the python version

# activate the environment
$ pipenv shell

# some more checks
$ (project-name) which python
/Users/user.name/.local/share/virtualenvs/project-name-Rh9gqIPi/bin/python
$ (project-name) which pipenv
/Users/user.name/.pyenv/shims/pipenv

# # install pipenv inside the environment in order to play nice with the environment's python version
$ (project-name) pip install pipenv
$ (project-name) which pipenv
/Users/user.name/.local/share/virtualenvs/project-name-Rh9gqIPi/bin/pipenv

# success!
# this setup guards against package installation errors, where the pipenv version doesn't match the working python version
```

Last step is to set up the interpreter to point into the new environment. This way, every time a new terminal window is launched, it automatically activates the environment.

## Old Way - using virtualenv

```
# EITHER prerequisites - Python 3.6
$ sudo apt-get install -y python3-pip build-essential libssl-dev libffi-dev python-dev python3-venv

# OR prerequisites - Python 3.8
$ sudo apt-get -y install liblapack-dev libblas-dev gfortran

# create environment
$ python3 -m venv my_env

# activate environment
$ source my_env/bin/activate
# and this results in
(my_env) user@user:~/environments

# done
# but this forces us to use `pip` and `requirements.txt`
# which doesn't enforce dependency versions
```
