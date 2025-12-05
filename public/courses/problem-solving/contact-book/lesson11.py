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
