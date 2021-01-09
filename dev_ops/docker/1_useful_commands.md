# Docker / Useful Commands

Build image:
```
$ docker build . --tag $IMAGE_TAG_NAME
```

Show built images:
```
$ docker images
```

Run image:

Overwrite image entrypoint:
- useful when an image has a pre-defined entry point (ie. running the image with the -it flags opens a Python shell)
```
$ docker run -it --entrypoint /bin/bash $IMAGE_TAG_NAME
```

Show running containers:
```
$ docker ps
```
