# NAS / Mount external drive

To mount a USB drive in a Linux NAS, you can follow these steps:

Connect the USB drive to your NAS.

Open a terminal or SSH into your NAS.

Check if your NAS has detected the USB drive by running the command `lsblk`. This command lists all block devices, including disks and partitions.

Identify the device name of your USB drive. It should be something like "/dev/sdX" (where X is a letter that represents the drive).
```shell
...
sdb                         8:16   0 232.9G  0 disk
└─sdb1                      8:17   0 232.9G  0 part
sdc                         8:32   0   1.4T  0 disk
└─sdc1                      8:33   0   1.4T  0 part
sdd                         8:48   0   1.8T  0 disk
├─sdd1                      8:49   0  1000G  0 part
└─sdd2                      8:50   0   863G  0 part
sde                         8:64   0 465.8G  0 disk
└─sde1                      8:65   0 465.8G  0 part
...
```

Create a directory where you want to mount the USB drive. For example, you can use the command `sudo mkdir /mnt/usb` to create a directory called "usb" in the "/mnt" folder.
```shell
sudo mkdir /mnt/sdb1
sudo chown -hR $(whoami):$(whoami) /mnt/sdb1
sudo mkdir /mnt/sdc1
sudo chown -hR $(whoami):$(whoami) /mnt/sdc1
sudo mkdir /mnt/sdd1
sudo chown -hR $(whoami):$(whoami) /mnt/sdd1
sudo mkdir /mnt/sdd2
sudo chown -hR $(whoami):$(whoami) /mnt/sdd2
sudo mkdir /mnt/sde1
sudo chown -hR $(whoami):$(whoami) /mnt/sde1
```

Mount the USB drive using the command `sudo mount /dev/sdX /mnt/usb`. Replace "/dev/sdX" with the actual device name of your USB drive and "/mnt/usb" with the directory you created in the previous step.
```shell
sudo mount /dev/sdb1 /mnt/sdb1
sudo mount /dev/sdc1 /mnt/sdc1
sudo mount /dev/sdd1 /mnt/sdd1
sudo mount /dev/sdd2 /mnt/sdd2
sudo mount /dev/sde1 /mnt/sde1
```

Verify that the USB drive is mounted by running the command `df -h`. This command shows the disk space usage of all mounted file systems, including the USB drive.

Edit the Samba config:
```shell
sudo nano /etc/samba/smb.conf
```
add
```
[nas-sdb1]
   comment = NAS sdb1
   path = /mnt/sdb1/
   read only = no
   browsable = yes

[nas-sdc1]
   comment = NAS sdc1
   path = /mnt/sdc1/
   read only = no
   browsable = yes

[nas-sdd1]
   comment = NAS sdd1
   path = /mnt/sdd1/
   read only = no
   browsable = yes

[nas-sdd2]
   comment = NAS sdd2
   path = /mnt/sdd2/
   read only = no
   browsable = yes

[nas-sde1]
   comment = NAS sde1
   path = /mnt/sde1/
   read only = no
   browsable = yes
```

Restart the Samba service:
```
sudo service smbd restart
```

Note: for permanent mappings that will live through a restart, you must add the drives to fstab:
https://quidsup.net/tutorials/?p=ubuntu-create-nas#5-jbod
