# Dev-Ops / System / Cockpit

This is a Ubuntu Server ui management utility.

This will be a [backport](https://help.ubuntu.com/community/UbuntuBackports).

Identify which version of ubuntu is running:
```bash
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.3 LTS
Release:	22.04
Codename:	jammy
```

Will use 22.04 as the release, codename `jammy`.

Following the [ubuntu](https://cockpit-project.org/running#ubuntu) release link:

```bash
. /etc/os-release
sudo apt install -t jammy-backports cockpit
```

Then open a browser window and browse to `<ip-address>:9090`
