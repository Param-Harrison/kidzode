contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Luigi", "phone": "456"}
]

# Simulate input
name_to_find = "Luigi" 

found = False
for person in contacts:
    if person["name"] == name_to_find:
        print(f"Found: {person['phone']}")
        found = True

if not found:
    print("Contact not found.")
