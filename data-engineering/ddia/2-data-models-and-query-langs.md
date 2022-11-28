# Chapter 2. Data Models and Query Languages

Deals with:
- how we think about the problem we are solving
- how the software is written

Every application layer, we should ask: _how is it represented in terms of the next-lower layer_? (ie. how does the above layer abstract away the work done by the lower-level layer?)

Design decisions have profound effect on what the software can and _can't_ do.

## Relational Model Versus Document Model

- data organized into _relations_ (tables)
- each relation is an unordered collection of _tuples_ (rows)
- roots in business data processing
  - transaction processing
  - batch processing
- generalize very well

## NoSQL

- better scalability
- widespread free or commercial products
- specialized query operations not easily supported by SQL
- more dynamic/expressive data model

## The Object-Relational Mismatch

_Impedance mismatch_: the awkward translation layer between OOP code and db model of tables, rows and cols. Object-Relational Mapping (ORM)s reduce amount of boilerplate.

_Locality_: better locality means fewer queries to obtain data about an object. Ex: JSON has better locality, since the "JSON blob" contains all the data about the object. SQL tables don't have good locality.
Locality is a good idea for large docs.

## Many-to-One and Many-to-Many Relationships

Speaks about _normalization_ (removing duplication), using one term across multiple "profiles" for better readability, etc.

### The network model

Used a path to access records.

### The relational model

Access path is determined automatically by the query optimizer, not by the developer.

Better support for joins an advantage.

### Comparison to document databases

Sort of reverted back to hierarhical model because they needed one-to-many relationships.

Schema flexibility a definite advantage.

Schema could be:
- on-read (runtime checking)
- on-write (compile-time checking)

## Query Languages for Data

SQL, HTML, CSS is _declarative_. Easier to hide implementation and parallelize.
Python is _imperative_ (certain operations in a certain order).

## MapReduce Querying

Purpose is to access large amounts of data across a number of machines.

As a data language, somewhere in between, neither fully imperative or declarative. Tells the computer how to manage the data (map it, reduce it, etc) but now exactly _how_ to do the tasks themselves. Still fairly low level.

## Graph-Like Data Models

Great for when many-to-many relationships are very common in our data.

A graph consists of:
- vertices (nodes/entities)
- edges (relationships/arcs)

Ex: car navigation systems, social graphs.

Usually, the vertices contain _homogeneous_ data, but not necessarily.

## Property Graphs

Sort of like a schema-less graph.
- vertices contain a unique id, key-value pairs, outgoing edges, incoming edges
- edges contain a unique id, tail vertex, head vertex, relationship label, key-value pairs

This results in any info being associated with any other info, using labels to maintain a clean data model, while making it easy to traverse a graph.

## Triple-Stores and SPARQL

Looks like:
- subject (a vertex)   OR! (another vertex, in which case the subject is an edge)
- predicate (key)
- object (value)

Ex: (Jim, likes, bananas)


