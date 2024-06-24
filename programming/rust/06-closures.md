# Rust / Closures

Small, inline functions that serve a specific purpose, different than functions.

1. Quick, inline functionality:
```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
    println!("{:?}", doubled); // Prints [2, 4, 6, 8, 10]
}
```
In this example, closure `|x| x * 2` is used inline within the map method.

2. Capturing variables visible within the current scope for a particular purpose:
```rust
fn main() {
    let multiplier = 3;
    let multiply = |x: i32| x * multiplier;
    
    let result = multiply(4); // 12
    println!("4 multiplied by {} is {}", multiplier, result);
}
```

3. Higher-order functions:
```rust
fn apply_to_5<F>(f: F) -> i32
where
    F: Fn(i32) -> i32,
{
    f(5)
}

fn main() {
    let result = apply_to_5(|x| x + 1);
    println!("Result: {}", result); // Result: 6
}
```

4. Type inference:
```rust
fn main() {
    let add = |a, b| a + b; // No need to specify types explicitly
    let result = add(2, 3);
    println!("The result of adding 2 and 3 is: {}", result);
}
```

5. Flexibility and conciseness:
```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().fold(0, |acc, &x| acc + x);
    println!("Sum of numbers: {}", sum); // Sum of numbers: 15
}
```
