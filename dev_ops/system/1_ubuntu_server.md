# System / Ubuntu Server

Prevent server from going to sleep if lid is closed:
```
# ssh into the server

$ sudo nano /etc/default/grub

# at the end of the GRUB_CMDLINE_LINUX_DEFAULT string, add " acpi=off apm=off"
# save and close

$ sudo update-grub
$ sudo reboot
```
