contacts = [
    {"name": "Zelda", "phone": "111"},
    {"name": "Link", "phone": "222"}
]

# Advanced Magic: Sort by 'name' key
sorted_contacts = sorted(contacts, key=lambda x: x["name"])

for p in sorted_contacts:
    print(p["name"])
