# System / Ubuntu Server

## Log files

https://help.ubuntu.com/community/LinuxLogFiles

## Installing Binaries

https://unix.stackexchange.com/questions/36871/where-should-a-local-executable-be-placed

1. If a non-system installed and maintained binary needs to be accessible system-wide to multiple users, it should be placed by an administrator into `/usr/local/bin`
2. If you are the only user of a binary, installing into `$HOME/bin` is the appropriate location since you can install it yourself and you will be the only consumer.

## System Information

Display system information:
```
$ sudo lshw  # best to run this with  | less   due to long output

# or, to see memory info
sudo lshw -short -C memory
```

Show mounted devices:
```
$ lsblk

# or

$ lsblk | less    # to scroll through output
```

Show mountable devices, extra info:
```
$ sudo fdisk -l    # preferably with  | less
# identify the device mount point (ex: /dev/usb1)
```

Mount a usb device:
```
$ sudo mount /dev/usb1 /media/usb1
```

Unmount a usb device:
```
$ sudo unmount /media/usb1
```

Install a downloaded .deb package:
```
$ sudo dpkg -i <package name.deb>
```

```
# Video info on Ubuntu 20.04
$ lspci -k | grep -EA3 'VGA|3D|Display'
```


## Prevent Server from Sleep when Lid Closed

Prevent server from going to sleep if lid is closed:
```
# ssh into the server

$ sudo nano /etc/default/grub

# at the end of the GRUB_CMDLINE_LINUX_DEFAULT string, add " acpi=off apm=off"
# save and close

$ sudo update-grub
$ sudo reboot
```

## How to get sound going on ubuntu 20.04, Lenovo Thinkbook

```
$ sudo nano /etc/modprobe.d/alsa-base.conf
```

Add the following line to the end of the file:
```
options snd-hda-intel single_cmd=1 model=lenovo
```

Exit and restart the alsa driver:
```
$ sudo alsa force-reload
```

## Useful Packages

```
sudo apt-get install -y \
    usbmount
```

## How to Install Nautilus Actions in Ubuntu 18.04

```
sudo add-apt-repository ppa:daniel-marynicz/filemanager-actions
sudo apt update
sudo apt install filemanager-actions-nautilus-extension
```

## Setting nautilus-open-terminal to launch Terminator rather than gnome-terminal
Open Nautilus Actions
https://askubuntu.com/questions/76712/setting-nautilus-open-terminal-to-launch-terminator-rather-than-gnome-terminal
Give in the full path to your command (`/usr/bin/terminator`) and program options (`--working-directory=%d/%b`) for opening the current path in Terminator.
