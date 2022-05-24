# Docker / Useful Commands

## Build image
```
$ docker build . --tag $IMAGE_NAME:$TAG_NAME
```

## Show built images
```
$ docker images
```

## Run image

**with overwrite image entrypoint:**
- useful when an image has a pre-defined entry point (ie. running the image with the -it flags opens a Python shell)
```
$ docker run -it --entrypoint /bin/bash $IMAGE_NAME:$TAG_NAME
```

**with passing in some arguments as well:**
```
$ docker run -it --entrypoint /bin/bash $IMAGE_NAME:$TAG_NAME $ARGUMENT1 $ARGUMENT2
```

## Show running containers
```
$ docker ps
```

## Run an image in the background
```
$ docker run -it -d -p 5000:80 <image-name>
```

## Clean up - removes all unused images
```
# inspect disk usage
$ docker system df -v

# removes all unused images
$ docker system prune
# or only delete images
$ docker image prune
```

If this doesn't do anything, maybe allocate more space by going into the Docker client settings.

## Privileged mode

Allows the docker container access to devices on the host.
```
$ docker run --privileged -it $IMAGE:$TAG /bin/sh
```

For more restricted access to specific devices, use `--devices` and list them.


## Mounting volumes

```
docker run -it --rm -v $GOOGLE_APPLICATION_CREDENTIALS:/tmp/keys/KEY.json:ro [docker-image]
```

Where `$GOOGLE_APPLICATION_CREDENTIALS` could be a key location.
