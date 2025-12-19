user_index = {
    1: {"id": 1, "name": "Alice"},
    99: {"id": 99, "name": "Bob"}
}

target_id = 99

if target_id in user_index:
    print(f"Found: {user_index[target_id]['name']}")
else:
    print("User not found.")
