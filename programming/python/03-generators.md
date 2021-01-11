# Python Generators

## Simple Example

```python
def get_even_numbers_for_range(range):
    for number in range(range):
        if number % 2 == 0:
        	yield n
            
even_number_generator = get_even_numbers_for_range(6) # nothing is executed at this point, only the generator object is returned

# now iterate through the generator
for even_number in even_number_generator:
    print(even_number)
```

#### Output

```python
0
2
4
```

#### Remarks

- a second attempt at iteration through the same generator will not work
- causing the generator to reach the end of its execution (and perhaps not pass through `yield`), for whatever reason), will "consume" the generator

## Generator Expression

```python
# list comprehension
newlist = [item.upper() for item in collection]

# generator comprehension
(item.upper() for item in collection)
```

## Use of `next()`

```python
def get_even_numbers_for_range(range):
    for number in range(range):
        if number % 2 == 0:
        	yield n
            
even_number_generator = get_even_numbers_for_range(4)

even_number_generator.next() # returns 0
even_number_generator.next() # returns 2
even_number_generator.next() # throws StopIteration exception
```

## Generator Pipeline

```
names.txt
---------------
Rhoda Hajduk
Armanda Pilling
Lahoma Mondragon
Angle Rase
```

```python
full_names = (name.strip() for name in open('names.txt'))
lenghts = ((name, len(name)) for name in full_names)
longest = max(lenghts, key=lambda x: x[1]) # outputs: (Lahoma Mondragon, 16)
```

It worth highlighting that Generators **PULL** data through pipelines.

## Context Managers

Methods that perform enter and exit functionality prior to executing a routine.

```python
from contextlib import contextmanager

@contextmanager
def context_manager:
    try:
        # setup/enter code
        yield # <--- sends back control to the caller
    finally:
        # wrap-up/exit code
```

The `with` keyword uses the enter/exit code provided by context managers.

## Coroutines

Coroutines are like functions that can also maintain a state. They are important because they can change `1)` the state of their properties or `2)` the state of something else. Coroutines use the `send()` method. The `send()` method is used to receive input, process input and maintain internal state.

#### Simple Coroutine with Internal State

```python
def coroutine_example():
    count = 0
    while True:
        x = yield 	# <-- captures the value of whatever is sent to the send() method
        			# and pauses the flow of whatever called it (true?)
        # do something with x
        count += 1
        print(f'{x} was inserted and this loop ran {count} times')
        
c = coroutine_example()
c.next() # prime the coroutine
c.send(10) # outputs: 10 was inserted and this loop ran 1 times
c.send(11) # outputs: 11 was inserted and this loop ran 2 times
```

It is worth highlighting that coroutines **PUSH** data through pipelines.

#### Coroutine with Decorator

```python
def coroutine_decorator(funct):
    def wrap(*args, **kwargs):
        cr = func(*args, **kwargs)
        cr.next()
        return cr
    return wrap

@coroutine_decorator
def coroutine_example():
    while True:
        x = yield
        # do something with x
        print x
        
c = coroutine_example()
c.send(10) # output: 10
```

#### Coroutine with Send Method

```
names.txt
---------------
Rhoda Hajduk
Armanda Pilling
Lahoma Mondragon
Angle Rase
```

```python
def coroutine_decorator(funct):
    def wrap(*args, **kwargs):
        cr = func(*args, **kwargs)
        cr.next()
        return cr
    return wrap

def sender(filename, target):
    for line in open(filename):
        target.send(line) # call the target coroutine
    target.close()
    
@coroutine_decorator
def match_counter(string):
    count = 0 # internal counter
    try:
        while True:
            line = yield
            if string in line:
                count += 1
    except GeneratorExit:
        print(f'[{string}] was found {count} times.')
```

#### Coroutine with Data Pipeline

```python
def coroutine_decorator(funct):
    def wrap(*args, **kwargs):
        cr = func(*args, **kwargs)
        cr.next()
        return cr
    return wrap

@coroutine_decorator
def router():
    try:
        while True:
            line = yield
            (first, last) = line.split(' ')
            fnames.send(first)
            lnames.send(last.strip())
	except GeneratorExit:
        fnames.close()
        lnames.close()
        
@coroutine_decorator
def file_write(filename):
    try:
        with open(filename, 'a+') as file
            while True:
                line = yield
                file.write(line + '\n')
	except GeneratorExit:
        file.close()
        
if __name__ == "__main__":
    fnames = file_write('first_names.txt')
    lnames = file_write('last_names.txt')
    router = router()
    for name in open('names.txt'):
        router.send(name)
    router.close()
```



