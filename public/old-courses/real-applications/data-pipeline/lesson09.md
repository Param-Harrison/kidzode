# The Full Pipeline

Let's combine Filter AND Map!
`Source -> Filter -> Map -> Sink`

```python
def numbers():
    yield 1
    yield 2
    yield 3
    yield 4

# 1. Filter Evens (2, 4)
def only_evens(nums):
    for n in nums:
        if n % 2 == 0:
            yield n

# 2. Map: Multiply by 10 (20, 40)
def times_ten(nums):
    for n in nums:
        yield n * 10

# Chain: numbers -> only_evens -> times_ten
chain = times_ten(only_evens(numbers()))

print(list(chain))
```

You'll see: `[20, 40]`.
This is how Big Data tools work! 🏭

## Try This!
Swap the order! `only_evens(times_ten(...))`. Does it change the result?
