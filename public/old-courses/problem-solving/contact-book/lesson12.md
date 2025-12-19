# Sort Contacts

A messy list is hard to read. Let's sort it A-Z!

We can use `sorted()` but dictionaries are tricky.
We need to tell Python to sort by **NAME**.

```python
contacts = [
    {"name": "Zelda", "phone": "111"},
    {"name": "Link", "phone": "222"}
]

# Advanced Magic: Sort by 'name' key
sorted_contacts = sorted(contacts, key=lambda x: x["name"])

for p in sorted_contacts:
    print(p["name"])
```

You'll see:
```
Link
Zelda
```

**Magic Explained:** `lambda` is a tiny function that says "Use the name to sort".

## Try This!
Add "Ganondorf" and see where he ends up!
