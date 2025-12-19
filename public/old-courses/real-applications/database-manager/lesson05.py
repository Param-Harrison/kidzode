users = [{"id": 1, "name": "Anakin", "side": "Light"}]
print(f"Before: {users[0]}")

target_id = 1
for user in users:
    if user["id"] == target_id:
        user["name"] = "Vader"
        user["side"] = "Dark"

print(f"After:  {users[0]}")
