# Partial Search

What if I only remember "Mar"?

We can check if "Mar" is **IN** the name!

```python
contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Maria", "phone": "456"},
    {"name": "Luigi", "phone": "789"}
]

search = "Mar"

print(f"Searching for '{search}'...")
for person in contacts:
    if search in person["name"]:
        print(f"Found: {person['name']}")
```

You'll see:
```
Found: Mario
Found: Maria
```

It found both!

## Try This!
Search for "i" to find everyone with an "i" in their name!
