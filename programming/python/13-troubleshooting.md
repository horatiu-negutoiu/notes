# Python / Troubleshooting

## Error installing python-snappy: snappy-c.h: No such file or directory

DEB-based: sudo apt-get install libsnappy-dev

RPM-based: sudo yum install libsnappy-devel

Brew: brew install snappy

https://stackoverflow.com/questions/11416024/error-installing-python-snappy-snappy-c-h-no-such-file-or-directory


## pipenv install causes: ERROR:: --system is intended to be used for pre-existing Pipfile installation

remove existing virtual environment

## pyenv in Windows

After installing pyenv, Python still doesn't work, asking to open Microsoft Web Store.
You have to disable Windows from picking up the "python" and "python3" cmd associations automatically :L

https://stackoverflow.com/questions/58754860/cmd-opens-windows-store-when-i-type-python

Search for "Manage app execution aliases" in start, disable the two associations.


