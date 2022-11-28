# Docker / Dockerfile

## Run a shell command

```
FROM alpine:3.14

# RUN ["executable", "param1", "param2"]

```

Note: RUN is a build layer, whereas CMD is the default command run when an image is instantiated into a container.
RUN is an image build step, the state of the container after a RUN command will be committed to the container image. A Dockerfile can have many RUN steps that layer on top of one another to build the image. CMD is the command the container executes by default when you launch the built image.
