# Find Contact

Where is Mario? Let's find him!

We need to loop and check the name.

```python
contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Luigi", "phone": "456"}
]

search_name = "Mario"

for person in contacts:
    if person["name"] == search_name:
        print(f"Found him! Phone: {person['phone']}")
```

You'll see:
```
Found him! Phone: 123
```

**How it works:** It checks every person until it finds a match!

## Try This!
Search for "Bowser". Does it print anything? (No, because he's not there!)
