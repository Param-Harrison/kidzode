# "Cat OR Dog"

What if we want docs with **EITHER** "cat" or "dog"?
We need the **Union**.

- Cat: `[1, 2]`
- Dog: `[2, 3]`
- Either: `[1, 2, 3]`

Python `set` uses `|` (pipe).

```python
cats = {1, 2}
dogs = {2, 3}

# Union (OR)
either = cats | dogs

print(either)
```

You'll see: `{1, 2, 3}`. No duplicates!

## Try This!
Find union of `{1}` and `{1, 2}`.
