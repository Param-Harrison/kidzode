# Print All Contacts

Let's see everyone in our book!

```python
contacts = [
    {"name": "Mario", "phone": "555-0123"},
    {"name": "Luigi", "phone": "555-0456"}
]

print("--- MY FRIENDS ---")
for person in contacts:
    print(f"{person['name']}: {person['phone']}")
```

You'll see:
```
--- MY FRIENDS ---
Mario: 555-0123
Luigi: 555-0456
```

It prints a nice list for us!

## Try This!
Add a 3rd friend and run it again!
