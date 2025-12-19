# Hints

## 🟢 Hint 1
Create data:
```python
users = [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]
posts = [{"user_id": 1, "content": "..."}] # Add more posts
```

## 🟡 Hint 2
Loop through posts: `for post in posts:`

## 🟠 Hint 3
Inside the loop, find the user:
```python
author = "Unknown"
for user in users:
    if user["id"] == post["user_id"]:
        author = user["name"]
```

## 🔴 Hint 4
Print it: `print(f"{author} wrote: {post['content']}")`
