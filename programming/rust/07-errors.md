# Rust / Errors

To see a backtrace:
```bash
RUST_BACKTRACE=1 cargo run
```

## Custom Errors

```rust
#[derive(Debug, Error)] // import the Debug (for printing) and Error (deriving errors) traits
pub enum Error { // <- `Error` can be named anything, but it's helpful and consise to leave it so, especially if many errors will be defined here
    #[error("Failed to do something: {0}")] // <- {0} is a positional argument that references the (String) below
    MyCustomError(String), // (String) allows to print the error message
}

pub fn do_something() -> Result<(), Error> { // <- the parent enum Error defined above is here, but we can return MyCustomError if we wanted
    let error = Error::MyCustomError("error details go here".into()); // .into() tries to convert the string to an "MyCustomError.String"
}
```
