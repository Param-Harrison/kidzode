contacts = [
    {"name": "Mario", "phone": "123"}
]

# Find Mario and change phone
for person in contacts:
    if person["name"] == "Mario":
        person["phone"] = "999-9999"
        print("Updated!")

print(contacts)
