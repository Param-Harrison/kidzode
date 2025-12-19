users_list = [
    {"id": 1, "name": "Alice"},
    {"id": 99, "name": "Bob"}
]

user_index = {}

for user in users_list:
    user_index[user["id"]] = user

print(user_index)
