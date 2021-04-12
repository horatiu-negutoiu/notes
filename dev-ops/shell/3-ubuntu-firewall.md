# Ubuntu Firewall

## Configure to allow SSH

Check the firewall.
```
$ sudo ufw status
Status: inactive   # most probably
```

Optionally: If it's active, configure it.
```
$ sudo ufw allow ssh
$ sudo ufw enable
$ sudo ufw status
```

Find target computer IP address.
```
$ ip addr | grep inet
inet 127.0.0.1/8 scope host lo
inet6 ::1/128 scope host
inet 192.168.1.140/24 brd 192.168.1.255 scope global enp0s25
...
```
