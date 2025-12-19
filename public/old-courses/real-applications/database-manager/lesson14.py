users = [{"id": 1, "name": "Alice"}]
posts = [{"content": "Hi!", "user_id": 1}]

for post in posts:
    author_name = "Unknown"
    for user in users:
        if user["id"] == post["user_id"]:
            author_name = user["name"]
            break
            
    print(f"{author_name} says: {post['content']}")
