# Rust / Basics

## Installation, Compilation, Run

Verify rust installation:
```bash
rustc --version
cargo --version
```

Compile, then execute:
```bash
rustc main.rs
./main
```
...or use `cargo` to do both in one shot.

New cargo project:
```bash
cargo new <my-project-name>
# creates the directory
# also initializes a new git repository!
#  this functionality can be overriden using the --vcs flag
```

Build cargo project:
```bash
# inside the project folder
cargo build
```
Then running it manually:
```bash
./target/debug/<project-executable>
```

Alternatively, to build AND execute:
```bash
# inside the project root
cargo run
```

Alternatively, to only check code but not produce an executable (much faster than build):
```bash
# inside the project root
cargo check
```

To compile for release (with optimizations) instead of for debugging:
```bash
# inside the project root
cargo build --release
# will build inside target/release instead of target/debug
```

> Note:
>
> Use `cargo doc --open` to generate documentation on all the packages you're using.

## Macros

Run macros. Notice the `!` after the function name:
```rust
println!("Hello world!");
```

## Variables

Variables:
```rust
// create a constant
// always type annotated
// has to be computed at runtime
const HOUR_IN_SECONDS: u32 = 60 * 60;

// create an immutable variable (default in Rust)
// can be computed during runtime
let apples = 5; // inferred type

// create a mutable variable
let mut guess = String::new(); //utf-8 encoded text
```

Shadowing:
```rust
let x = 5;

let x = x + 1; // re-assign the variable using 'let'

{
    let x = x + 2;
    println!("Inner scope: {x}");
}

println!("Outer scope: {x}");
```

Overflowing:
- if building in **Debug** mode, integer overflow errors will be raised.
- if building in **Release** mode, interger overflow errors are handled using _two's complement wrapping_ (eg. 277 becomes 1).

Char types:
- are unicode, not ASCII, so special symbols (and emojis)

Tuples:
```rust
let a: (i32, f64, u8) = (500, 6.4, 1);
let five_hundred = a.0;
let (x, y z) = a; // auto-unpacks the tuple

() // a unit (empty value: empty return type), a return when nothing else is returned
```

Arrays:
```rust
let mths = ["jan", "feb", "mar"];

let a[i32; 5] = [1, 2, 3, 4, 5];

let b = [3; 5]; // a 5-length array with 3's inserted everywhere
```

## Execution Order

In this code:
```rust
io::stdin()
    .read_line(&mut guess) // & is a reference
    .expect("Failed to read line");
```

- The `Result` object from a `read_line` is an <b>enumeration</b> (`Enum`), with each possible state called a <b>variant</b>.
- `Result` has variants `Ok` and `Err`.
- Values of the `Result` type also have methods defined on them; in this case, they have an `expect()` method defined.
  - `OK.expect()` returns the object it receives.
  - `Err.expect()` displays the error and halts the program.
- If you don't `.expect()`, the program will compile but you'll get a warning to implement it. However, the _right_ way would be to catch the error.

## Comparisons

To compare, use `match`:
```rust
use std::cmp::Ordering;
...
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => println!("You win!"),
}
```
Match will only run the first matching "arm".

## Error handling basics

To switch from crashing using `.expect()` to handling an error, switch to a `match` expression:
```rust
// from
let guess: u32 = guess.trim().parse().expect("Please type a number!");

// to
let guess: u32 = guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue, // _ is a catchall value
};
```

## Flow control

If statements:
```rust
let x = 3;
if x < 5 {
    println!("Smaller");
} else if x == 5 {
    println!("Equal");
} else {
    println!("Bigger");
}
```

Let using `if`:
```rust
let condition = true;
if number = if condition { 5 } else { 6 };
```

For (infinite) loops:
```rust
loop {
    ...
}
```

Assign loop value to variable:
```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```

Loop labels:
```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break; // (default) exists the inner loop
            }
            if count == 2 {
                break 'counting_up; // exits the OUTER loop!
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

Conditional loops (while):
```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

For loops:
```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }
}
```

For loop with reversed range:
```rust
fn main() {
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
```

## Strings

For Strings, `.trim()` also eliminates the `\n`.

## Functions

- must always specify type annotations, so the compiler almost never needs help infering what types we mean.

Statement:
```rust
let x = 6; // does not return a value upon execution
           // has a semicolon!
```

Expressions:
```rust
let y = {
    let x = 3;
    x + 1 // returns 4 to assign to y
          // also, doesn't have a semicolon!
}
```

Return statements:
```rust
fn five() -> i32 {
    5
}

fn main() {
    let x = five();
}
```










