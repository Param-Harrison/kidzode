# Dirty Data

"Apple." and "Apple" should be the same.
But `.split()` keeps the dot! 😱

We need to remove punctuation.

```python
import string

text = "Hello, world!"
print(f"Original: {text}")

# Magic trick to remove punctuation
clean_text = text.translate(str.maketrans('', '', string.punctuation))

print(f"Clean: {clean_text}")
tokens = clean_text.lower().split()
print(tokens)
```

You'll see: `['hello', 'world']`. Clean! ✨

## Try This!
Clean `"Win!!! (Yes)"` into `['win', 'yes']`.
