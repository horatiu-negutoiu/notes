# Rust / Traits

Example:
```rust
#[derive(Debug, PartialEq, Copy, Clone)]
enum ShirtColor {
    Red,
    Blue,
}
```

The `Debug`, `PartialEq`, `Copy` and `Clone` <b>traits</b> enable certain functionality on structs and enums:
```rust
fn main() {
    let color1 = ShirtColor::Red;
    let color2 = ShirtColor::Blue;

    // Debug trait allows printing
    println!("{:?}", color1); // Output: Red

    // PartialEq trait allows comparison
    if color1 == ShirtColor::Red {
        println!("The color is red.");
    }

    // Copy trait allows copying
    let color3 = color1; // This is a bitwise copy
    println!("{:?}", color3); // Output: Red

    // Clone trait allows cloning
    let color4 = color2.clone();
    println!("{:?}", color4); // Output: Blue
}
```
