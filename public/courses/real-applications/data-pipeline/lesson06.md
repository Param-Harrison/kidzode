# What is a Pipeline?

A **Pipeline** is a series of steps.
Data flows through like water in a pipe! 💧

`Source -> Processing -> Destination`

With generators, we can chain them together!

```python
# 1. Source (Numbers 0-4)
def number_gen():
    yield 0
    yield 1
    yield 2
    yield 3
    yield 4

# 2. Processing (Double the number)
def doubler(source):
    for n in source:
        yield n * 2

# Connect them!
source = number_gen()
pipeline = doubler(source)

# Run it
for item in pipeline:
    print(item)
```

You'll see: 0, 2, 4, 6, 8.
The data flows from `source` to `doubler` to `print`!

## Try This!
Add a start `tripler(source)` function and chain it too! `doubler(tripler(source))`
