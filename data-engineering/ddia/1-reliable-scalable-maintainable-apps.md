# Chapter 1. Reliable, Scalable, and Maintainable Applications

Reliability: Tolerating hardware & software faults, human error.
Scalability: Measuring load & performance, latency, percentiles throughput.
Maintainability: Operability, simplicify & evolvability.

Many applications today are data-intensive, as opposed to compute-intensive.

There are some standard building blocks:
- db: storing data
- cache: remember results
- search index: search data by keyword
- stream process: asynchronous message processing
- batch process: periodically crunch large amounts of accumulated data

We kind of want to think of these tools as "data systems" because:
- their usage becomes blurred (eg. Redis can be both a db and a messaging system)
- apps have such wide-ranging requirements that we're breaking these down to _tasks_ and assigning these tasks to individual tools instead (then stich them together)

Due to the increased complexity of the system, some questions arise:
- how do we ensure data remains correct and complete even during failures?
- how do we provide consistently good performance even if parts of the system are degraded?
- how do we handle increases in load?
- what does a good API service look like?

This book focuses on three concerns: Reliability, Scalability, and Maintainability

## Reliability

- performs the function the user expected
- can tolerate user making mistakes or using the software in unexpected ways
- performance adequate for the use case
- system prevents unauthorized access and abuse

We must be specific about the _types of faults_ we want to tolerate. 
This book deals with faults that can be cured.

### Hardware Faults

These faults are _usually known_, as in, some hardware (eg. hard drives) have Mean Time To Failure (MTTF).
First response was to add redundancy to that technology.
As system complexity increased, there is also a need to move towards systems that can tolerate loss of entire machines.

### Software Errors

These faults are usually unknown, as they lie dormant for long times and are triggered by unusual sets of circumstances.
Sometimes, assumptions stop being true.
Lots of small things can help:
- carefully think about assumptions
- thorough testing
- process isolation
- allow process to crash and restart
- measure
- monitor
- analyze system behaviour in prod
- self checks

### Human Error

These are unintended errors, such as configuration errors.

Approach:
- minimize opportunities for error
- decouple the places where people make the most mistakes
- test thoroughly at all levels
- allow quick and easy recovery from human errors
- setup clear and detailed monitoring
- implement good management practices and training

## Scalability

These faults occur as "system load" increases.

What is "system load"? Depends on circumstance.

In the case of Twitter, 
1. initial implementation was a simple query
2. the large quantity of tweets was then dealt with by pre-computing the users's feeds
3. the final implementation included a hybrid approach, with simple queries for accounts which had a large following

### Describing Performance

Two ways to look at it:
- Given increased load and keeping system resources the same, how is the performance affected?
- Given increased load and keep performance unchanged, how much do we need to increase resources?

Factors to consider:
- throughput
- response time (between client/server)
  - mean
  - median (50th percentile)
  - 95th percentile
  - 99th percentile
  - 95th, 99th, and 99.9th percentiles are common (abbreviated p95, p99, and p999)
- latency (time it takes for the request to be picked up)
- tail latencies, especially for a service where the highest paying users have the most features
- service level objectives (SLOs)
- service level agreements (SLAs)

### Approaches for Coping with Load

- scaling up (vertical scaling, moving to a more powerful machine)
- scaling out (horizontal scaling, distributing the load across multiple smaller machines)
- elastic systems, that can automatically scale according to load
- common wisdom is to keep db on a single node (scale up) and scale out stateless systems
- generally, first bring out an iteration to prove concept, _then_ start optimizing for load, if needed

## Maintainability

Three design principles for software systems:
- Operability - make it easy to run systems smoothly
- Simplicity - make it easy for new engineers to understand the system, remove as much complexity as possible
- Evolvability - make it easy to make changes in the future

### Operability: Making Life Easy for Operations

- monitor health
- track down cause of problems
- keep software platform up to date
- keep tabs on how different systems affect each other
- anticipate future problems
- establish good practices and tools
- perform complex maintenance tasks
- maintain system security
- define processes that make the system predictable
- preserve org knowledge about the system

Data systems can:
- provide visibilty into runtime behaviour
- provide good support for automation and integration with tools
- avoiding dependency on individual machines
- good documentation and easy to understand models (if X then Y)
- good default behaviour
- self-healing if appropriate
- predictable behaviour, minimize surprises

### Simplicity: Managing Complexity

Symptoms of complexity:
- explosion of state space
- tight coupling of modules
- tangled dependencies
- incosistent naming and terminology
- hacks for performance
- special casing to work on issues elsewhere

Accidental complexity: complexity that arises only from implementation, not from the inherent nature of the problem solved.

Tools to reduce complexity:
- abstraction - hide implementation behind a facade

### Evolvability: Making Change Easy

_Agile_ provides a framework for adapting to change using technical tools and patterns, such as Test Driven Development (TDD) and refactoring.

Ease of modification of a system is closely linked to its simplicity and abstractions. Evolvability: agility on a data system level.

