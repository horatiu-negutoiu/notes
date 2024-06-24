# Rust / Ownership

> Ownership: A set of rules that govern how a Rust program manages memory. Ownership enables Rust to make memory-safe guarantees without a garbage collector.

Ownership rules:
- Each value in Rust has an owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.

Note:
- Borrowing (passing by reference)
- Taking ownership (passing by value)
