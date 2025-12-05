users = [
    {"id": 1, "name": "Alice"}
]

posts = [
    {"id": 101, "content": "Hello World", "user_id": 1},
    {"id": 102, "content": "I love Python", "user_id": 1}
]

print("Posts by Alice:")
for post in posts:
    if post["user_id"] == 1:
        print(f"- {post['content']}")
