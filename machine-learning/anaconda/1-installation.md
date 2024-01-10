# Anaconda / Installation

## Tips

On installation, refuse the automatic environment activation.
If you do so, it will cause every shell to have the "base" conda environment activated, pointing to `/home/<user>/anaconda3/bin/python`.

To undo conda's base environment activated on startup:
```
conda config --set auto_activate_base false
```

To activate the base environment:
```
conda activate base
```

To deactivate the environment:
```
conda deactivate
```
