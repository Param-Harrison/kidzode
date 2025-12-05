# Solution

```python
contacts = [
    {"name": "Mom", "phone": "555-1234"},
    {"name": "Dad", "phone": "555-5678"},
    {"name": "Sis", "phone": "555-9999"}
]

search = "Mom"

for c in contacts:
    if c["name"] == search:
        print(f"{c['name']}'s Phone: {c['phone']}")
```

Output:
```
Mom's Phone: 555-1234
```

You found her! 🔍
