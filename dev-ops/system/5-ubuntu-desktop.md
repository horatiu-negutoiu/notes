# System / Ubuntu Desktop

## Ubuntu Desktop Shortcuts

```
Super                       Switch between the Activities overview and desktop.
Super + `                   Switch between windows from the same application.
Super + Shift + <-/->       Move the current window one monitor to the left/right.
Super + Up Key              Maximize window.
Super + Down Key            Back to original size.
Super + Left Key            Align to left side of the active screen.
Super + Right Key           Align to right side of the active screen.

Ctrl + H                    Show hidden files.

Print                       Screenshot tool.
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
