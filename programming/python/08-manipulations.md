## Manipulations

List to Dict:

```
new_nums = {i: nums[i] for i in range(0, len(nums))}
```

Dict to List:

## Selections

Select part of List:

```
nums[nums.index(first_num) + 1:]
```

Select part of Dict:

```
{k: v for k, v in b.items() if k > 1}
```

## Iterations

Parse through List:

```
for num in num_list:
    print(num)
```

Parse through Dict:

```
for key, value in dictionary.items():
    print(key, value)
```

## Advanced Iterations

Usage of `map(function, target)`.
The `map(function, target)` function creates an iterator, for use with `sum()` or other functions that accept iterators.
Ex:
```
sum(map(lambda k: int(digit_map[k])*10**k, digit_map))
```


