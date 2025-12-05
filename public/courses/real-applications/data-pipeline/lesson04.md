# Looping Generators

We rarely use `next()` manually.
We just use a `for` loop!

The loop handles `next()` and stops when the generator finishes.

```python
def countdown():
    yield 3
    yield 2
    yield 1
    yield "Blastoff! 🚀"

for item in countdown():
    print(item)
```

You'll see:
```
3
2
1
Blastoff! 🚀
```

Clean and simple!

## Try This!
Make a `colors()` generator that yields "Red", "Green", "Blue"!
