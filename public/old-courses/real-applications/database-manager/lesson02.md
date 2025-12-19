# Inserting Data

Adding a new row to our table is called **Inserting** (or Creating).
Since it's a list, we just use `.append()`!

```python
users = []

# Insert User 1
users.append({"id": 1, "name": "Mario"})

# Insert User 2
users.append({"id": 2, "name": "Luigi"})

print(users)
```

You'll see:
```
[{'id': 1, 'name': 'Mario'}, {'id': 2, 'name': 'Luigi'}]
```

We are populating the database! 🍄

## Try This!
Insert a user named "Toad"!
