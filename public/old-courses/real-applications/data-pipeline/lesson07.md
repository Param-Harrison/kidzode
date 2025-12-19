# Filtering the Stream

We can remove unwanted items from the stream.
We just skip `yield` if we don't like the item! 🙅‍♀️

```python
def get_numbers():
    yield 1
    yield 2
    yield 3
    yield 4

# Only yield EVEN numbers
def even_filter(source):
    for n in source:
        if n % 2 == 0:
            yield n
        # Else: do nothing (it gets dropped)

stream = get_numbers()
filtered = even_filter(stream)

print(list(filtered))
```

You'll see: `[2, 4]`.
We filtered the water! 🚰

## Try This!
Create an `odd_filter` instead!
