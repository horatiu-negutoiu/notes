# Dev Ops / Shell

### Move files:
```
$ mv ~/Downloads/some-file.md .         # moves to current directory
```

### Export variables:
```
$ export VAR_NAME=var_value
```

**Note on exporting variables**
Shells have subshells. Running:
```
## begin contents of env.example:
## FOO=bar
## end contents of env.example

$ source env.example

$ echo $FOO
bar           # this works because the parent shell executed both source and echo commands

## beging contents of script.sh
## echo "foo is: $FOO"
## end contents of script.sh

$ ./script.sh
foo is:       # this will not work because the source command ran in another subshell
```

The solution is to:
- create an `env.example` just as a sample,
- add `.envrc` to .gitignore and …
- … users create their own `.envrc` file with whatever values they want in it, including copying the values from the env.example.


### Verify that a variable has a value (and that it is not an empty string), use:
```
-n
   string is not null.

-z
  string is null, that is, has zero length

# Example:

$ foo="bar";
$ [ -n "$foo" ] && echo "foo is not null"
foo is not null
$ [ -z "$foo" ] && echo "foo is null"
$ foo="";
$ [ -n "$foo" ] && echo "foo is not null"
$ [ -z "$foo" ] && echo "foo is null"
foo is null
```

### Find Files

```
# search (in root) (type file) (anything starting with 'kube')
$ find / -type f -name "kube*"

# ignore case
$ find / -type f -iname "kube*"
```
