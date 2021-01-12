# Python / Pylint

To disable certain errors, generate a .pylintrc file containing:
```
[MESSAGES CONTROL]

# Enable the message, report, category or checker with the given id(s). You can
# either give multiple identifier separated by comma (,) or put this option
# multiple time.
#enable=

# Disable the message, report, category or checker with the given id(s). You
# can either give multiple identifier separated by comma (,) or put this option
# multiple time (only on the command line, not in the configuration file where
# it should appear only once).
disable=R0801

[FORMAT]
max-line-length=120
```

Then, in your makefile:
```
$ pylint $FOLDER --rcfile=.pylintrc-dag
```
