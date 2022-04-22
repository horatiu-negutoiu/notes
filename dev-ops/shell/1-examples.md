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


### Replace characters in string

MYSQL_USERNAME=$(echo $MYSQL_USERNAME | tr -d '\n')

run some server "mysql+mysqlconnector://${MYSQL_USERNAME}"

mlflow server -p 5000 --backend-store-uri "mysql+mysqlconnector://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/${MYSQL_DB}" --default-artifact-root "${DEFAULT_ARTIFACT_ROOT}" --host 0.0.0.0


### Named parameters

function print_usage() {
  cat <<EOF
Usage: ./set_env_vars.sh [--help|--env]
  --help        Displays this help
  --env         Runs this script, setting environment variables.
                Possible values are [dev|stage|prod]
EOF
}

function main() {
  if [[ $# -ne 1 ]]; then
    print_usage
    exit 1
  fi

  local param
  param="$1"
  case $param in
    --help)
      print_usage
      exit 0
      ;;
    *)
      # process named arguments
      for ARGUMENT in "$@"
      do
        KEY=$(echo $ARGUMENT | cut -f1 -d=)
        VALUE=$(echo $ARGUMENT | cut -f2 -d=)

        case "$KEY" in
          --env)
            TARGET_ENV=${VALUE}
            ;;
        esac
      done
  esac

  echo "running in ${TARGET_ENV}"

  echo $TARGET_ENV
}

main "$@"


### Script Arguments - Bash Space-Separated (e.g., --option argument)

```
cat >/tmp/demo-space-separated.sh <<'EOF'
#!/bin/bash

POSITIONAL_ARGS=()

while [[ $# -gt 0 ]]; do
  case $1 in
    -e|--extension)
      EXTENSION="$2"
      shift # past argument
      shift # past value
      ;;
    -s|--searchpath)
      SEARCHPATH="$2"
      shift # past argument
      shift # past value
      ;;
    --default)
      DEFAULT=YES
      shift # past argument
      ;;
    -*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
    *)
      POSITIONAL_ARGS+=("$1") # save positional arg
      shift # past argument
      ;;
  esac
done

set -- "${POSITIONAL_ARGS[@]}" # restore positional parameters

echo "FILE EXTENSION  = ${EXTENSION}"
echo "SEARCH PATH     = ${SEARCHPATH}"
echo "DEFAULT         = ${DEFAULT}"
echo "Number files in SEARCH PATH with EXTENSION:" $(ls -1 "${SEARCHPATH}"/*."${EXTENSION}" | wc -l)

if [[ -n $1 ]]; then
    echo "Last line of file specified as non-opt/last argument:"
    tail -1 "$1"
fi
EOF

chmod +x /tmp/demo-space-separated.sh

/tmp/demo-space-separated.sh -e conf -s /etc /etc/hosts
```

Output from copy-pasting the block above
```
FILE EXTENSION  = conf
SEARCH PATH     = /etc
DEFAULT         =
Number files in SEARCH PATH with EXTENSION: 14
Last line of file specified as non-opt/last argument:
#93.184.216.34    example.com
```

Usage
```
demo-space-separated.sh -e conf -s /etc /etc/hosts
```


### Script Arguments - Bash Equals-Separated (e.g., --option=argument)

```
cat >/tmp/demo-equals-separated.sh <<'EOF'
#!/bin/bash

for i in "$@"; do
  case $i in
    -e=*|--extension=*)
      EXTENSION="${i#*=}"
      shift # past argument=value
      ;;
    -s=*|--searchpath=*)
      SEARCHPATH="${i#*=}"
      shift # past argument=value
      ;;
    --default)
      DEFAULT=YES
      shift # past argument with no value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac
done

echo "FILE EXTENSION  = ${EXTENSION}"
echo "SEARCH PATH     = ${SEARCHPATH}"
echo "DEFAULT         = ${DEFAULT}"
echo "Number files in SEARCH PATH with EXTENSION:" $(ls -1 "${SEARCHPATH}"/*."${EXTENSION}" | wc -l)

if [[ -n $1 ]]; then
    echo "Last line of file specified as non-opt/last argument:"
    tail -1 $1
fi
EOF

chmod +x /tmp/demo-equals-separated.sh

/tmp/demo-equals-separated.sh -e=conf -s=/etc /etc/hosts
```

Output from copy-pasting the block above
```
FILE EXTENSION  = conf
SEARCH PATH     = /etc
DEFAULT         =
Number files in SEARCH PATH with EXTENSION: 14
Last line of file specified as non-opt/last argument:
#93.184.216.34    example.com
```

Usage
```
demo-equals-separated.sh -e=conf -s=/etc /etc/hosts
```

### Script Arguments - Other

see: https://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash



