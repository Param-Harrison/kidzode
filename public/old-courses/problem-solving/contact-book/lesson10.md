# Delete Contact

Bowser is annoying. Delete him!

Use `.remove()` but we need to know WHICH item to remove.

```python
contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Bowser", "phone": "666"}
]

# We need to find the dictionary first
to_remove = None

for person in contacts:
    if person["name"] == "Bowser":
        to_remove = person

if to_remove:
    contacts.remove(to_remove)
    print("Deleted Bowser!")

print(contacts)
```

**Why the extra step?** We can't remove items WHILE looping through the list. It confuses Python!

## Try This!
Try to delete someone who isn't in the list.
