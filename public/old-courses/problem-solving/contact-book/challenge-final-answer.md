# Solution

```python
phonebook = {
    "Family": [
        {"name": "Mom", "phone": "111"},
        {"name": "Dad", "phone": "222"}
    ],
    "Friends": [
        {"name": "Mario", "phone": "333"},
        {"name": "Luigi", "phone": "444"}
    ]
}

print("--- FRIENDS ---")
for friend in phonebook["Friends"]:
    print(f"Name: {friend['name']} (Phone: {friend['phone']})")
```

Output:
```
--- FRIENDS ---
Name: Mario (Phone: 333)
Name: Luigi (Phone: 444)
```

You built a complete contact manager! 📒
