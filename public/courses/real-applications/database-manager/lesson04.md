# Find by ID

Usually, we want to find just **one** specific record using its ID.
We loop and check `if` the ID matches!

```python
users = [
    {"id": 1, "name": "Ash"},
    {"id": 2, "name": "Misty"},
    {"id": 3, "name": "Brock"}
]

target_id = 2
found_user = None

for user in users:
    if user["id"] == target_id:
        found_user = user
        break # Stop looking!

print(found_user)
```

You'll see:
```
{'id': 2, 'name': 'Misty'}
```

We found her! 🌊

## Try This!
Change `target_id` to 3 to find Brock!
