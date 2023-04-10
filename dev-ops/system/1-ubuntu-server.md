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

## Managing SWAP

Check if swap is enabled:
```bash
$ sudo swapon --show
NAME      TYPE SIZE USED PRIO
/swap.img file 3.7G   0B   -2   # enabled in this case
```

You can also check by running the free command:
```bash
$ sudo free -h
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       201Mi       3.2Gi       1.0Mi       313Mi       3.3Gi
Swap:          3.7Gi          0B       3.7Gi
```

Disable Swap:
```bash
$ sudo swapoff -a
# doesn't return anything
```

Remove the swap file:
```bash
$ sudo rm /swap.img
```

Modify the fstab file so that the Swap file is not re-created after a system reboot:
```bash
# check that the line exists:
$ sudo cat /etc/fstab
...
/swap.img       none    swap    sw      0       0

# remove the swap entry:
$ sudo sed -i '/swap/d' /etc/fstab

# check that the swap entry from /etc/fstab has dissapeared
```

Check if swap is disabled:
```bash
$ sudo swapon --show
# should not return anything
```

## Formatting a drive

Unmount the drive:
```shell
$ sudo umount /mnt/sdd2

# if you can't unmount it, restart the nas
```

Install the `ntfs-3g` utility:
```shell
$ sudo apt-get install ntfs-3g
```

Quick format the drive:
```shell
$ sudo mkfs.ntfs --quick /dev/sdd2
```
