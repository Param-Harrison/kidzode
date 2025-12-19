# Connecting Generators (Yield From)

Sometimes we want to yield everything from *another* generator.
Instead of a loop, we use `yield from`.

```python
def sub_gen():
    yield 1
    yield 2

def main_gen():
    yield 0
    # Yield everything from sub_gen
    yield from sub_gen()
    yield 3

print(list(main_gen()))
```

You'll see: `[0, 1, 2, 3]`.
It flattens the two generators into one! 🔗

## Try This!
Create 3 sub-generators and combine them all!
