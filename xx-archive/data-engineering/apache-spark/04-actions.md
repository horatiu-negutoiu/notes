# Spark Actions

- act on an RDD and produce a result that is not an RDD

## Simple Actions

- `collect` - return all elements in the RDD as an array, used to trigger execution or print values
- `count` - count number of elements in the RDD
- `first` - returns the first element in the RDD
- `take(n)` - returns the first `n` elements

## Reduce

- perform an operation across all elements of an RDD (ex: sum, count)
- the operation is a function that takes two values as input
- function is called for every element in the RDD
- executed in serial fashion

Ex:

```python
vals = [3, 5, 2, 4, 1]
sum(x, y):
    return x + y

# output:
# sum( sum( sum( sum(3, 5), 2), 4), 1) = 15
```

## Aggregate

- perform parallel computations on partitions and combine them
- a Sequence operation happens on each partition
- a Combine operation helps combine the results
- can do multiple computations at the same time

Ex:

```python
rdd = [3, 5, 4, 7, 4]
seqOp = (lambda x, y: (x[0] + y, x[1] * y))
comOp = (lambda x, y: (x[0] + y[0], x[1] * y[1]))
collData = aggregate((0, 1), seqOp, comOp)

# short description:

# assuming 2 partitions rdd1 = [3, 5, 4], rdd2 = [7, 4]
# sequence operation produces: [(12, 60), (11, 28)]
# combine operation produces: (23, 1680)

# long description

# sequence operation starts
# computing first partition on node 1: [3, 5, 4]
# identity values are (0, 1) => x[0] = 0, x[1] = 1
# starting with first element in rdd: 3
# x[0] + y = 0 + 3 = 3
# x[1] * y = 1 * 3 = 3
# taking the second element: 5
# x[0] + y = 3 + 5 = 8
# x[1] * y = 3 * 5 = 15
# taking the third element: 4
# x[0] + y = 8 + 4 = 12
# x[1] * y = 15 * 4 = 60
# first partition is complete: (12, 60)
# computing second partition on node 2: [7, 4]
# identity values are (0, 1) => x[0] = 0, x[1] = 1
# starting with first element in rdd: 7
# x[0] + y = 0 + 7 = 7
# x[1] * y = 1 * 7 = 7
# taking the second element: 4
# x[0] + y = 7 + 4 = 11
# x[1] * y = 7 * 4 = 28
# second partition is complete: (11, 28)
# sequence operation complete: [(12, 60), (11, 28)]
# combine operation starts with inputs: [(12, 60), (11, 28)]
# x[0] + y[0] = 12 + 11 = 23
# x[1] * y[1] = 60 * 28 = 1680
# combine operation complete: (23, 1680)
```

## Pair

- `countByKey` - produces a count by each key in the RDD
- `groupByKey` - perform aggregation like sum or average by key
- `reduceByKey` - perform reduce by key
- `aggregateByKey` - perform aggregate by key

