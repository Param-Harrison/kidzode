# Contact Card

Let's print a nice card for each person.

```python
person = {
    "name": "Princess Peach",
    "phone": "555-9999",
    "email": "peach@castle.com"
}

print("-" * 20)
print(f"Name:  {person['name']}")
print(f"Phone: {person['phone']}")
print(f"Email: {person['email']}")
print("-" * 20)
```

You'll see:
```
--------------------
Name:  Princess Peach
Phone: 555-9999
Email: peach@castle.com
--------------------
```

Looks professional!

## Try This!
Make a function `print_card(contact)` to do this for any contact!
