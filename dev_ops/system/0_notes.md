## Setup Quicks

### How to get sound going on ubuntu 20.04, Lenovo Thinkbook

$ sudo nano /etc/modprobe.d/alsa-base.conf

Add the following line to the end of the file:
options snd-hda-intel single_cmd=1 model=lenovo

Exit and restart the alsa driver:
$ sudo alsa force-reload

### Video info on Ubuntu 20.04

$ lspci -k | grep -EA3 'VGA|3D|Display'

### How to Install Nautilus Actions in Ubuntu 18.04
sudo add-apt-repository ppa:daniel-marynicz/filemanager-actions
sudo apt update
sudo apt install filemanager-actions-nautilus-extension

#### Setting nautilus-open-terminal to launch Terminator rather than gnome-terminal
Open Nautilus Actions
https://askubuntu.com/questions/76712/setting-nautilus-open-terminal-to-launch-terminator-rather-than-gnome-terminal
Give in the full path to your command (/usr/bin/terminator) and program options (--working-directory=%d/%b) for opening the current path in Terminator.

#### Log files
https://help.ubuntu.com/community/LinuxLogFiles

### Multiple Python versions

https://stackoverflow.com/questions/22681824/how-do-i-use-different-python-version-in-venv-from-standard-library-not-virtua
https://asdf-vm.com/#/core-manage-asdf-vm

- follow instructions then:
$ asdf plugin list all      # you'll see a list of things
$ asdf plugin add python    # 
$ asdf install python 3.7.7 







# MacOs, list of running processe occupying a port

$ lsof -i TCP:5000