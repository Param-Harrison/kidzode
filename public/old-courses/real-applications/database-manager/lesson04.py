users = [
    {"id": 1, "name": "Ash"},
    {"id": 2, "name": "Misty"},
    {"id": 3, "name": "Brock"}
]

target_id = 2
found_user = None

for user in users:
    if user["id"] == target_id:
        found_user = user
        break

print(found_user)
