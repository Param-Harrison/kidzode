# Searching with an Index

Once we have an index, we don't need `for` loops to find an ID!
We just look it up. It's instant! 🚀

```python
# Assume we built index in Lesson 11
user_index = {
    1: {"id": 1, "name": "Alice"},
    99: {"id": 99, "name": "Bob"}
}

# Find ID 99 INSTANTLY
target_id = 99

if target_id in user_index:
    print(f"Found: {user_index[target_id]['name']}")
else:
    print("User not found.")
```

You'll see:
```
Found: Bob
```

No loops! Huge databases use this trick to go fast!

## Try This!
Change `target_id` to 5 and see what happens!
