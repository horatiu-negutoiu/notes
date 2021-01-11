https://askubuntu.com/questions/413650/how-to-connect-to-another-computer-through-the-internet-using-ssh
https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/
https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/

On the server/target, install OpenSSH.

$ sudo apt-get install openssh-server

Start the service, if it hasn't started by itself already.

$ sudo service ssh start

Check the firewall.

$ sudo ufw status
(probably Inactive)

If it's active, configure it.

$ sudo ufw allow ssh
$ sudo ufw enable
$ sudo ufw status

Find target computer IP address.

$ ip addr | grep inet
...

From client/guest computer, connect to host.

$ ssh -v <user>@<ip-address>
(since no certificate has been set up, password must be entered)




Great, ssh-ing works, now let's set up an ssh key so we don't have to type the password every time.
On the client:

$ ssh-keygen -t rsa

Copy the .pub file to the server.

$ ssh-copy-id -i ~/.ssh/id_rsa.pub horatiu@192.168.0.18
(gets copied in the correct folder automatically)

Ssh-ing again will now work without asking for password.




Let's add a config file so we don't have to type the server IP every time.

$ nano ~/.ssh/config

Host t510
    HostName 192.168.0.18
    Port 22
    User horatiu

Save file, exit. Now, reconnect to server.

$ ssh t510
(should connect without requiring password)




Awesome, easy to connect. Let's