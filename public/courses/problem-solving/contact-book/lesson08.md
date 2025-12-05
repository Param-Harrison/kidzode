# Interactive Search

Let's ask the user who they are looking for!

```python
contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Luigi", "phone": "456"}
]

# Simulate input
name_to_find = "Luigi" 

found = False
for person in contacts:
    if person["name"] == name_to_find:
        print(f"Found: {person['phone']}")
        found = True

if not found:
    print("Contact not found.")
```

**New Trick:** We use a `found` variable (flag) to remember if we found them!

## Try This!
Search for "Yoshi". It should print "Contact not found."
