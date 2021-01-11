# Python Basics

## Quick Start

```python
def main():
    print("something")

if __name__ == '__main__': main()
```

## Data Types

Array: `x = [1, 2, 3]`

Tuple: `x = (1, 2, 3)`

Dictionary: `x = {'one': 1, 'two': 2, 'three': 3}`

Check if same object:

```python
x = (1, 'two', 3.0, [4, 'four'], 5)	# id(x) will output some number
y = (1, 'two', 3.0, [4, 'four'], 5)	# id(y) will output the same number as above
if x[0] is y[0]:
    print('same type')
    
if isinstance(x, tuple):
    print('x is a tuple')	# this will be run
elif isinstance(x, list):
    print('x is a list')
else:
    print('nothing else')
```

```python
# iterable combined with for loop
mylist = [x*x for x in range(3)]
```



## Inline Conditional

```python
x = 'Do this' if this_is_true else 'Do this other thing'
```

## Arithmetic Operators

```
//			Integer Division
%			Remainder (Modulo)
**			Exponent
```

## Bitwise Operators and Bit Variables

```
^			Xor
<<			Shift left
>>			Shift right

x = 0x0a
```

## Boolean Operators

```
and			And
or			Or
not			Not
in			Value in set
not in		Value not in set
is			Same object identity
is not		Not same object identity
```

## Sequences

FOR loop

```python
for item in [1, 2, 3, 4]:
    print(f'{item}')
    
for item in range(0, 10):
    print('this will run 10 times 0 to 9')
    
for item in inclusive_range(5, 25, 5):
    print('this will run between 5 to 25 inclusive, skipping by 5')
```

WHILE loop

```python
while condition:
	statement
```

## Strings

```python
print('hello {}'.format('world')) 		# before 3.6
print(f'hello {x}') 					# 3.6 and up
name = '''horatiu'''
name.upper()
name.lower()
name.casefold()
```

## Decimals, Floats and Complex Numbers

```python
from decimal import *
a = Decimal('.10')

x = 1 + 2j
y = complex(1, 2)
```

## Helpers

```python
x = 'seven'
type(x)			# <class 'str'>
```

## Date and Time

```python
from datetime import date
from datetime import time
from datetime import datetime
from datetime import timedelta
```

Utilities

```python
strptime,  strftime ,  calendar, formatmonth
```

## Files

```python
import os
from os import path
import shutil
from shutil import make_archive
from zipfile import zipfile
```

Utilities

```python
# no special module needed for this group
f = open("filename.txt", "w+") 	# 'w' open for write, '+' create if not existing 
f = open("filename.txt", "a") 	# 'a' is open to append
f = open("filename.txt", "r")	# 'r' is open to read
f.write("something")
f.seek(0)						# goes back to the beginning of the file
f.close()
```

```python
path.exists("textfile.txt")
path.isfile("textfile.txt")
path.isdir("~/horatiu")
path.split("~/horatiu/textfile.txt") # touple
path.realpath("textfile.txt") # ~/horatiu/textfile.txt
path.getmtime("textfile.txt") # modification time
```

```python
shutil.copy(src, dst)
shutil.copystat(src, dst)
os.rename("textfile.txt", "newfile.txt")
shutil.make_archive("archive", "zip", "~/horatiu/directory-to-zip")
with ZipFile("testzip.zip", "w") as newzip:
    newzip.write("textfile.txt")
```

## Web Data

```python
import urllib.request
import json
from html.parser import HTMLParser
from xml.dom.minidom
```

```python
weburl = urllib.request.urlopen("https://google.ca")
print(weburl.getcode())
data = weburl.read()
```

```python
theJSON = json.loads(data)
if "title" in theJSON["metadata"]:
    print(theJSON["metadata"]["title"])
for i in theJSON["features"]:
    print(i["properties"]["magnitude"])
```

```python
class MyHTMLParser(HTMLParser):
    def handle_comment(self, data):
        position = self.getpost()

parser = MyHTMLParser()
f = open("sample.html")
if f.mode == 'r':
    contents = f.read()
    parser.feed(contents)
```

```python
doc = xml.dom.minidom.parse("sample.xml")
doc.nodeName
doc.firstChild.tagName
```

## Classes

Some special data method names:

```python
__init__			Constructor
__str__				Custom print() representation of an object (comes before __repr__)
__repr__			Custom print() representation (secondary to __str__)
```

Constructor arguments by name

```python
class Animal:
    def __init__(self, **kwargs):
        self._type = kwargs['type'] if 'type' in kwargs else 'default value'
        
    def type(self):
        return self._type
```

Getter/Setter method

```python
class Animal:
    ...
    def type(self, t = None):
        if t: self._type = t
        return self._type
```

Class vs Object variables

- class variables remain the same across instantiated objects

```python
class Animal:
    class_variable = 'something'
    
    __init__(self, object_variable):
        self._object_variable = object_variable
        
animal = Animal()
```

Super()

```python
class Cat(Animal):
    def __init__(self, **kwargs):
        self._type = 'cat'
        if 'type' in kwargs: del kwargs['type']
        super().__init(**kwargs)
```

## Exceptions

Raise exception

```python
raise <exception_type>(<message>)
<exception_type> can be:
TypeError
ValueError
ZeroDivisionError
...
```

Catch exception

```python
try:
    raise TypeError('Unknown type')
except TypeError as error:
    print(f'TypeError: {error}')
```

## Database

```python
import sqlite3
db = sqlite.connect('db-api.db')
cur = db.cursor()
cur.execute('CREATE TABLE...')
db.commit()
cur.execute('SELECT COUNT(*) FROM table')
cur.fetchone()[0]
for row in cur.execute('SELECT * FROM table'):
    print(row)
db.close()
```









## Other Things to Investigate

- Empty objects of different types cast to Boolean (are they False or not?)
- Work with Float vs Decimal
- Type of element in structures (tuples in dictionary behaviour when type(x))
- Is `id(var)` for two of the same vars the same id?





























