# Dev Ops / Shell

Export variables:
```
$ export VAR_NAME=var_value
```

Verify that a variable has a value (and that it is not an empty string), use:
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
