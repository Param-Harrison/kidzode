# Update Contact

Mario got a new number! Let's update it.

```python
contacts = [
    {"name": "Mario", "phone": "123"}
]

# Find Mario and change phone
for person in contacts:
    if person["name"] == "Mario":
        person["phone"] = "999-9999"
        print("Updated!")

print(contacts)
```

You'll see:
```
Updated!
[{'name': 'Mario', 'phone': '999-9999'}]
```

We modified the dictionary INSIDE the list!

## Try This!
Change Mario's name to "Super Mario"!
