# Rust / Tonic

## Basic - extract request / build response

Extract a request out of a tonic wrapper:
```rust
let tonic_request = tonic::Request<MyRequestType> = ...;
let my_request = tonic_request.into_inner();
```

Package a response into a tonic wrapper:
```rust
let my_response: MyResponseType = ...;
let tonic_response = tonic::Response::new(my_response);
```

## Async traits

need to fill this out
```rust
#[tonic::async_trait]
impl MySpecialTrait for Something {
    ...
}
```
