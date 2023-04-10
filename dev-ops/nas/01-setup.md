# NAS / Setup

tutorial source: https://quidsup.net/tutorials/?p=ubuntu-create-nas#1-overview

## Setup NFS

NFS (Network File System) is used with Unix operating systems such as Linux and Apple macOS. Skip this step if you only want to share with Microsoft Windows-based computers.

Install dependencies
```shell
$ sudo apt install nfs-kernel-server
```

Export the drive folders
NFS will only export specified folders to a certain network range when they‘re added to /etc/exports:
```shell
$ sudo nano /etc/exports
```

Add the following to the end of the exports file:
Note: Use tab instead of space between the folder and IP address
```
/mnt/disk1	192.168.1.0/24(rw,sync,root_squash,subtree_check)
/mnt/disk2	192.168.1.0/24(rw,sync,root_squash,subtree_check)
/mnt/raidmount	192.168.1.0/24(rw,sync,root_squash,subtree_check)
/home/nas/data  192.168.1.0/24(rw,sync,root_squash,subtree_check)
```

Restart NFS
```shell
$ sudo service nfs-server restart
```


## Setup Samba

Samba (or SMB/CIFS) is used with Microsoft Windows, but can also be understood by Linux and Android phones.

Install dependencies:
```shell
$ sudo apt install samba samba-common-bin -y
```

Setup Network Shares
```shell
$ sudo nano /etc/samba/smb.conf
```

Then, at the end of the file, add (sample)
```shell
[mynas]
	comment = Samba on My NAS
	path = /mnt/
	read only = no
	browsable = yes
```
This creates a share called “mynas” allowing access to all the drives mounted under the /mnt folder.
Read-only is set to no, which permits modifying and writing data to the share.
Browsable allows the share to be seen by a Linux file manager or Windows Explorer.

Add user account to access the Samba share.
Since Samba doesn’t use the system account password, we need to set up a Samba password for our user account:
You can also specify a different username, although it must exist on the system.
```shell
$ sudo smbpasswd -a $(whoami)
$ sudo smbpasswd -a anotheruser # if you want but it must exist already
```

Restart Samba
```shell
$ sudo service smbd restart
```

Connect to the Share
You can now connect to the share using `\\IP address` of NAS from Windows Explorer.

Or `smb://IP address` of NAS from a Linux file manager.
