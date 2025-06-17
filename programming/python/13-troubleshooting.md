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


## poetry dylib files missing

If you get errors like:
```
dyld[34087]: Library not loaded: @executable_path/../lib/libpython3.13.dylib
  Referenced from: <4C4C44BC-5555-3144-A122-0C664ABB9E8F> /Users/<user>/.local/share/mise/installs/poetry/2.1.1/venv/bin/python3
  Reason: tried: '/Users/<user>/.local/share/mise/installs/poetry/2.1.1/venv/lib/libpython3.13.dylib' (no such file)

Traceback:

  File "<stdin>", line 937, in main
  File "<stdin>", line 576, in run
```

Solved it by clearing any poetry installation through mise and installing it manually with Symlinks true:
```bash
$ curl -sSL https://install.python-poetry.org | sed 's/symlinks=False/symlinks=True/' | python3 -
```






