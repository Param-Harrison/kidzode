# Deleting Data

Sometimes we need to remove data. This is called **Deleting**.
We find the record, then `.remove()` it from the list.

```python
users = [
    {"id": 1, "name": "Mario"},
    {"id": 2, "name": "Bowser"}
]

target_id = 2
user_to_delete = None

# 1. Find the user
for user in users:
    if user["id"] == target_id:
        user_to_delete = user
        break

# 2. Delete the user
if user_to_delete:
    users.remove(user_to_delete)
    print("Bowser defeated! 🌟")

print(users)
```

You'll see:
```
Bowser defeated! 🌟
[{'id': 1, 'name': 'Mario'}]
```

## Try This!
Add "Peach" to the list and try to delete "Mario"!
