# Python Environments / Troubleshooting

## Resolving Git conflicts in Pipenv Lockfiles

Get the lock file parseable and then run `pipenv lock`

## Pipenv Install packages with extensions

A package like `apache-beam[gcp]` contains an extension and `pipenv install apache-beam[gcp]==x.xx.x` doesn't work because "[" and "]" are meta-characters. Instead:
```
$ pipenv install "apache-beam[gcp]"==x.xx.x
```
