# Spark Transformations

- performed on one RDD
- result creates one RDD
- operated on one element at a time
- lazy evaluated
- can be distributed across nodes

## Map

```python
newRdd = rdd.map(function)
```

- similar to Map Reduce "Map"
- acts upon each element
- result RDD may have the same number of elements as original RDD
- **result can be of a different data type** (ex: input: list, output: vector, row, string, etc)
- can pass functions to perform complex tasks

Use cases:

- Data standadization (ex: First Last)
- Element level computations (ex: compute tax)
- Add new attributes (ex: grades based on test scores)

## flatMap

```python
newRdd = rdd.flatMap(function)
```

- works the same way as Map
- can return more elements than the original map

Use cases:

- break up elements in the original map and create a new map
  - split strings in the original map
  - extract child elements from a nested json string

## Filter

```python
newRdd = rdd.filter(function)
```

- filters RDD to select elements that match a condition
- resulting RDD smaller than original RDD
- function must return `True/False`

# Set Operations

- set operations are performed on two RDDs

### Union

- returns a new dataset that contains the union of the elemnents in the source dataset and the argument

```python
unionRdd = firstRdd.union(secondRdd)
```

### Intersection

- returns a new dataset that contains the intersection of elements in the source dataset and the argument

```python
intersectionRdd = firstRdd.intersect(secondRdd)
```

## Pair RDDs

- special type of RDD used to store key/value pairs
- all transformations that work on regular RDDs are available here
- in addition, Spark supports some special functions 
  - `mapValues` - transform each value without changing the key
  - `flatMapValues` - generate multiple values with the same key



