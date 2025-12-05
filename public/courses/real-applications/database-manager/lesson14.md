# Joining Data

A **Join** combines data from two tables.
Let's print posts WITH the author's name!

```python
users = [{"id": 1, "name": "Alice"}]
posts = [{"content": "Hi!", "user_id": 1}]

for post in posts:
    # Find the author
    author_name = "Unknown"
    for user in users:
        if user["id"] == post["user_id"]:
            author_name = user["name"]
            break
            
    print(f"{author_name} says: {post['content']}")
```

You'll see:
```
Alice says: Hi!
```

We dynamically combined (Joined) the data! 🤝

## Try This!
Using an **Index** for users makes this much faster! Try it!
