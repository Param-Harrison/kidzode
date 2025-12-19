# Solution

```python
# 1. Data
users = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
]

posts = [
    {"user_id": 1, "content": "Python Rocks"},
    {"user_id": 2, "content": "My Cat"},
    {"user_id": 1, "content": "Coding is Fun"}
]

# 2. Build Index (Optional but fast!)
user_index = {}
for user in users:
    user_index[user["id"]] = user

# 3. Join & Print
for post in posts:
    # Look up author ID in our index
    author_id = post["user_id"]
    if author_id in user_index:
        name = user_index[author_id]["name"]
        print(f"{name} wrote: {post['content']}")
```

Output:
```
Alice wrote: Python Rocks
Bob wrote: My Cat
Alice wrote: Coding is Fun
```
