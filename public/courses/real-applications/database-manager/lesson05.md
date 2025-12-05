# Updating Data

People change! We need to **Update** our records.
First we **Find** the record, then we change it.

```python
users = [{"id": 1, "name": "Anakin", "side": "Light"}]
print(f"Before: {users[0]}")

# Find Anakin (ID 1)
target_id = 1
for user in users:
    if user["id"] == target_id:
        # Update him!
        user["name"] = "Vader"
        user["side"] = "Dark"

print(f"After:  {users[0]}")
```

You'll see:
```
Before: {'id': 1, 'name': 'Anakin', 'side': 'Light'}
After:  {'id': 1, 'name': 'Vader', 'side': 'Dark'}
```

He turned to the dark side! 😈

## Try This!
Create a user with `score: 10` and update it to `20`!
