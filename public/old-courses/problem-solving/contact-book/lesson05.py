contacts = [
    {"name": "Mario", "phone": "555-0123"},
    {"name": "Luigi", "phone": "555-0456"}
]

print("--- MY FRIENDS ---")
for person in contacts:
    print(f"{person['name']}: {person['phone']}")
