# Solution

```python
db = [
    {"id": 1, "name": "Iron Man", "active": True},
    {"id": 2, "name": "Ultron", "active": True}
]

# Update Iron Man
for user in db:
    if user["id"] == 1:
        user["active"] = False

# Delete Ultron
ultron = None
for user in db:
    if user["id"] == 2:
        ultron = user
        break

if ultron:
    db.remove(ultron)

print(db)
```

Output:
```
[{'id': 1, 'name': 'Iron Man', 'active': False}]
```
