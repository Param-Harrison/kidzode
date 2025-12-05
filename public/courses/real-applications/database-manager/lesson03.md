# Reading Data

Viewing all rows is called **Reading** (or Selecting).
We just loop through the list!

```python
users = [
    {"id": 1, "name": "Batman"},
    {"id": 2, "name": "Superman"}
]

print("--- USERS ---")
for user in users:
    print(f"ID: {user['id']} | Name: {user['name']}")
```

You'll see:
```
--- USERS ---
ID: 1 | Name: Batman
ID: 2 | Name: Superman
```

A nice list of everyone! 🦸‍♂️

## Try This!
Add "Wonder Woman" and run the code again!
