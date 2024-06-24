# Rust / Structs

Sample struct:
```rust
// with named types:
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

// without named types:
struct Color(i32, i32, i32);

// or a unit-like struct (useful to implement traits):
struct AlwaysEqual;
```

To use pre-defined traits, like `Debug`:
```rust
//        v-- this is called a 'trait'
#[derive(Debug)] // <-- outer attribute
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {rect1:?}");
    // prints: rect1 is Rectangle { width: 30, height: 50 }

    println!("rect1 is {rect1:#?}");
    // prints: rect 1 Rectangle {
    //     width: 30,
    //     height: 50,
    // }
}
```

## Methods

To define a method, define a `fn` inside an `impl` block:
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}
```

> Note: `&self` is short for `&self: &Self`.

> Note: To be able to change data within `self`, you have to `mut &self`.

## Enums

Example:
```rust
enum IpAddrKind {
    V4,
    V6,
}

let four = IpAddrKind::V4;
let six = IpAddrKind::V6;
```

We can also put data in enums:
```rust
enum IpAddr {
    V4(String),
    V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));

let loopback = IpAddr::V6(String::from("::1"));
```

## Option enum

Rust doesn't have a `null` feature. By doing this it eliminates an entire class of errors that can spawn from providing `null` as a value.

Option enum covers that by being able to return a value or return nothing:
```rust
enum Option<T> {
    None,
    Some(T),
}
```
Where `T` is called a "generic type".

Example:
```
let some_number = Some(5);
let some_char = Some('c');
let absent_number: Option<i32> = None;
```

As a result of having to explicitly call this, `Option<T>` and `T` are different types, and the compiler will disallow this:
```rust
let x: i8 = 5;
let y: Option<i8> = Some(5);
let sum = x + y;
```
...and by disallowing this, it prevents us from using a variable we expect not to be null, when in fact, it is.
