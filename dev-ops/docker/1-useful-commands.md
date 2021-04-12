# Docker / Useful Commands

Build image:
```
$ docker build . --tag $IMAGE_NAME:$TAG_NAME
```

Show built images:
```
$ docker images
```

Run image:

Overwrite image entrypoint:
- useful when an image has a pre-defined entry point (ie. running the image with the -it flags opens a Python shell)
```
$ docker run -it --entrypoint /bin/bash $IMAGE_NAME:$TAG_NAME
```

Passing in some arguments as well:
```
$ docker run -it --entrypoint /bin/bash $IMAGE_NAME:$TAG_NAME $ARGUMENT1 $ARGUMENT2
```

Show running containers:
```
$ docker ps
```

Run an image in the background:
```
$ docker run -it -d -p 5000:80 <image-name>
```

**Clean up** - removes all unused images
```
# inspect disk usage
$ docker system df -v

# removes all unused images
$ docker system prune
# or only delete images
$ docker image prune
```

If this doesn't do anything, maybe allocate more space by going into the Docker client settings.