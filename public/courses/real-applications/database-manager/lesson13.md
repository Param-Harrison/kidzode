# Linking Data (Relationships)

Databases often have multiple tables linked by IDs.
For example, **Users** and **Posts**.

A Post belongs to a User. We store the `user_id` in the Post.

```python
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
```

You'll see:
```
- Hello World
- I love Python
```

We linked them! 🔗

## Try This!
Create a "Bob" (ID 2) and give him a post!
