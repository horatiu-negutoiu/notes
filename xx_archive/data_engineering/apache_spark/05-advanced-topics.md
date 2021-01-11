# Loading and Storing Data in Spark

## Creating RDDs

RDDs can be created from:

- text files
- JSON
- `Parallelize()` on collections
- Sequence files
- Databases
- Live streams, etc...

## Storing RDDs

Spark provides simple functions to store into:

- text files
- JSON
- Sequence files
- Collections

For optimization, use language-specific libraries for persistence rather than Spark utilities.

# Partitioning and Persistence

## Partitioning

By default, all RDDs are partitioned (`spark.default.parallelism` parameter). Usually, total number of partitions = number of CPU cores available. 

Larger clusters need configuration.

Can be specified during RDD creation. 

Derived RDD take the same number of partitions as the source.

## Persistence

By default, Spark loads RDDs when it needs them, then drops them. Spark loads and re-compute the RDD chain each time a different operation is performed. Spark can `persist()` an RDD to retain the RDD in memory (or other sinks). Also, `cache()` provides the default persist (in memory).

# Other Advanced Spark Topics

## Broadcast Variables

Variables created during execution are local to the node. Enter Broadcast Variables. Read-only once created, shared by all nodes, used for lookup tables or similar features. Spark optimizes transmission of these variables.

## Accumulators

We might need variables we are able to change, such as counters. Enter Accumulators. Shared by all nodes, helps compute items not done through reduce operations. Spark optimizes transmission and takes care of race conditions.

