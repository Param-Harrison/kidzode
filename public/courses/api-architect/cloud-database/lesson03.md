# The Update Logic 🔄

To update, we must find the **Index** first.
Or iterate until we find the matching ID.

### The Logic
```python
target_id = 1
for user in users:
    if user["id"] == target_id:
        user["name"] = "New Name"
```

### Your Goal
1. Create users list with ID 1 and 2.
2. Set target to ID 2.
3. Loop to find user with ID 2.
4. Change their name to "Updated".
5. Print users list.

### Achievement
🔄 **Database Engineer**: You patched live data!
