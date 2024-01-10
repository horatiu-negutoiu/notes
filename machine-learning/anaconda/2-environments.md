# Anaconda / Environments

## Create an environment

Create an environment:
```
conda create --name environment-name
# or, for a specific python version
conda create --name environment-name python=3.10
# if you have pyenv also installed, it's recommended you _always_ use the python argument, so that conda copies the python files as well.
```

Conda will create this environment in `/home/<user>/anaconda3/envs/environment-name`

Then, you can activate this environment using:
```
conda activate environment-name
```

## List existing environments

```
conda info --envs
```

## Remove an existing environment

```
conda env remove --name environment-name
```
