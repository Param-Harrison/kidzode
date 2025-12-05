# Random Map

Instead of math, let's just swap letters randomly!
A -> Q, B -> F, C -> L...

```python
import random
import string

alphabet = list(string.ascii_lowercase)
shuffled = alphabet[:]
random.shuffle(shuffled)

# Create a map
mapping = dict(zip(alphabet, shuffled))

print(f"a -> {mapping['a']}")
```

This is hard to read... but Frequency Analysis can break it! (E is the most common letter).

## Try This!
Encrypt "hello" using this map.
