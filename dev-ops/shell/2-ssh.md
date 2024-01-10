# SSH

## Connect using SSH Key

Documentation:
https://askubuntu.com/questions/413650/how-to-connect-to-another-computer-through-the-internet-using-ssh
https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/
https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/

Check if SSH into the target computer works.
```
$ ssh user@target-ip
<type password>
```

To use a particular private key:
```
$ ssh -i /path/to/private/key user@target-ip
```

Exit.
```
$ exit    # disconnects from target computer
```

Install OpenSSH server.
```
$ sudo apt-get install openssh-server
```

Start the service, if it hasn't started by itself already.
```
$ sudo service ssh start
```

Set up an ssh key, on the client machine:
```
$ ssh-keygen -t rsa
```

Copy the .pub file to the server.
```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server-ip
```
The key gets copied in the correct folder automatically, but if it doesn't (and see the error/warning message issued by the `ssh-copy-id` command), use the `-f` flag to force-copy.

SSH-ing again will now work without asking for password. Test:
```
$ ssh user@alias
```

Let's add a config file so we don't have to type the server IP every time.

$ nano ~/.ssh/config
```
Host <custom-host-name>
    HostName 192.168.0.18
    Port 22
    User horatiu
```

Save file, exit. Now, reconnect to server.
```
$ ssh <custom-host-name>
(should connect without requiring password)
```

If it doesn't, it's probably because you're using another filename, not `id_rsa` and `id_rsa.pub`.

**To be able to run commands from another computer**
```
scp root@<lan-ip>:~/.kube/config ~/.kube/config
# watch out not to override your existing config file
# maybe first copy it somewhere else locally instead
```
