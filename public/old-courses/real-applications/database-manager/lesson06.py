users = [
    {"id": 1, "name": "Mario"},
    {"id": 2, "name": "Bowser"}
]

target_id = 2
user_to_delete = None

for user in users:
    if user["id"] == target_id:
        user_to_delete = user
        break

if user_to_delete:
    users.remove(user_to_delete)
    print("Bowser defeated! 🌟")

print(users)
