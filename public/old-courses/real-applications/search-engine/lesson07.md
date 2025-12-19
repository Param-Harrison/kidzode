# "Cat AND Dog"

What if we want docs with **BOTH** "cat" and "dog"?
We need the **Intersection** of their lists.

- Cat: `[1, 2, 5]`
- Dog: `[2, 3, 5]`
- Both: `[2, 5]`

Python `set` makes this easy with `&`.

```python
cats = {1, 2, 5}
dogs = {2, 3, 5}

# Intersection (AND)
both = cats & dogs

print(both)
```

You'll see: `{2, 5}`.

## Try This!
Find docs with "Cat" AND "Bird" (assume bird is `[2, 9]`).
