# Mapping (Transforming)

**Mapping** means changing every item in the stream.
Like painting every car that passes by! 🚗 -> 🚙

```python
def get_names():
    yield "mario"
    yield "luigi"

# Transform: Capitalize names
def capitalizer(source):
    for name in source:
        yield name.capitalize()

stream = get_names()
pipeline = capitalizer(stream)

print(list(pipeline))
```

You'll see: `['Mario', 'Luigi']`.
Logic separated from Data!

## Try This!
Map integers `[1, 2]` to strings `["1", "2"]` using `str()`!
