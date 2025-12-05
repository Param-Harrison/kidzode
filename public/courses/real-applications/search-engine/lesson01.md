# How Search Works 🔍

Imagine searching for "Cat" in 1,000 books.
If you read every page... it takes forever! 🐢

We need an **Index**.
Like the index at the back of a textbook!

- "Apple" -> Page 5, 12
- "Banana" -> Page 8
- "Cat" -> Page 1, 99

This is called an **Inverted Index**.

```python
# A simple Index (Dictionary)
index = {
    "cat": [1, 5, 10], # Found in Doc 1, 5, 10
    "dog": [2, 5],
    "bird": [3]
}

# Searching is instant!
print(f"Cat is in: {index['cat']}")
```

You'll see: `[1, 5, 10]`. Instant! ⚡️

## Try This!
Create an index for "pizza" and "burger" and search for them!
