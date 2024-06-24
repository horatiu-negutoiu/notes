# Rust / Project Management

- Packages: A Cargo feature that lets you build, test, and share crates
- Crates: A tree of modules that produces a library or executable
- Modules and use: Let you control the organization, scope, and privacy of paths
- Paths: A way of naming an item, such as a struct, function, or module

## Crates

- <b>Binary</b> (`src/main.rs`) crate
  - must have a `main()` function
  - compile to an executable
- <b>Library</b> (`src/lib.rs`) crate
  - don't compile to an executable

## Packages

- A bundle of one or more crates.
- contains a `Cargo.toml` file.
- can contain as many <b>binary crates as we like</b>, but <b>at most only one library crate</b>.
- must contain at least one crate

## Modules

- start from the crate root (`main.rs` or `lib.rs`).
- by default, everything is private

Inline modules: inside crates:
```rust
// main.rs
mod garden {  // <-- a private module
    struct Garden { // <-- a private "crate"
        name: String,
    }

    impl Garden {
        fn new(name: &str) -> Self { // <-- a private function
            Self {
                name: name.to_string(),
            }
        }
    }
}
```

Instead of having to type the entire path all the time, you can take advantage of the keyword `use`:
```rust
use crate::garden::vegetables::Asparagus;
Asparagus.grow();
```

In this directory structure, you can define:
```
my-app/
├─ src/
│  ├─ garden/
│  │  ├─ vegetables.rs  <-- sub-modules here
│  ├─ main.rs  <-- modules here
│  ├─ garden.rs  <-- sub-modules here
```

So, these are the files:
```rust
// src/main.rs
use crate::garden::vegetables::Asparagus;

pub mod garden;

fn main() {
    let plant = Asparagus {};
}
```

```rust
// src/garden.rs
pub mod vegetables;
```

```rust
// src/garden/vegetables.rs
#[derive(Debug)]
pub struct Asparagus {}
```

Logically, it looks something like this:
```
crate <-- main.rs
 └── garden <-- garden.rs
     └── vegetables <-- vegetables.rs
         └── Asparagus <-- inside vegetables.rs
```

## Paths

Absolute:
```rust
use crate::path::to::Submodule;
```

Relative:
```rust
// must start at the same level as the calling module
use path::to::Submodule;
```

Or relative using super:
```rust
// calls the parent module
fn deliver_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::deliver_order();
    }

    fn cook_order() {}
}
```

## Using pub

You have to prefix modules and functions with `pub` if you want them to be accessible from outside.

For structs, each member of the struct has to be made public:
```rust
mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }
// ...
```

For enums, making the enum public makes all of its members public:
```rust
mod back_of_house {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}
```

Idiomatic to specify `use` all the way to the module, not the function! This is also valid for structs and enums - they get counted as the "modules". Ex:
```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
}
```
and
```rust
use crate::my::custom_module;

fn main() {
    custom_module::do_something();
}
```

You can also combine `pub` and `use`:
```rust
pub use crate::module::to::be::reexported;
```

You can use nested paths:
```rust
// --snip--
use std::{cmp::Ordering, io};
// --snip--
```

And even refer the module:
```rust
use std::io::{self, Write};
// equivalent to:
use std::io;
use std::io::Write;
```

We can also bring in everything:
```rust
use std::collections::*;
```
















