# Shell / Curl and Wget

To download directly from Github:
```
wget --no-check-certificate --content-disposition https://github.com/joyent/node/tarball/v0.7.1
# --no-check-cerftificate was necessary for me to have wget not puke about https
curl -LJO https://github.com/joyent/node/tarball/v0.7.1
```
