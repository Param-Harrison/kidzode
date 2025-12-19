# Generating Unique IDs 🆔

Every user needs a unique ID.
We can use the `len()` of the list + 1.

### The Logic
If there are 2 users, next ID is 3.

```python
new_id = len(users) + 1
new_user = {"id": new_id, "name": "Sam"}
```

### Your Goal
1. Create list with 5 fake users.
2. Calculate `next_id = len(list) + 1`.
3. Create new user with that ID.
4. Append to list and print list.

### Achievement
🆔 **System Admin**: You prevented ID collisions!
