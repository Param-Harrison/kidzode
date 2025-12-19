users = [
    {"name": "Bob", "score": 50},
    {"name": "Alice", "score": 100},
    {"name": "Charlie", "score": 80}
]

sorted_users = sorted(users, key=lambda x: x["score"])

print(sorted_users)
