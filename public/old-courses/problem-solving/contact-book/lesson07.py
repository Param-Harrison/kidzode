contacts = [
    {"name": "Mario", "phone": "123"},
    {"name": "Luigi", "phone": "456"}
]

search_name = "Mario"

for person in contacts:
    if person["name"] == search_name:
        print(f"Found him! Phone: {person['phone']}")
