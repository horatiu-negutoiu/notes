# Docker / Unpack Images

Sometimes it's useful to be able to download an image and inspect the code inside it.

First, pull the image:
```
docker pull flexys/slack-notification-resource
```

Next, save the image into an archive:
```
docker save flexys/slack-notification-resource:latest --output slack-notifications.tar
```

Next, untar the archive:
```
mkdir slack-notifications
tar -xvzf slack-notifications.tar ./slack-notifications
```
