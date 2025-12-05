# What is an Index?

Searching through a huge list one-by-one is **slow**.
An **Index** is like a book's index: it tells you exactly where to find something.

In Python, we can use a **Dictionary** as an index!
It maps an ID directly to the record.

```python
# Our database (List)
users_list = [
    {"id": 1, "name": "Alice"},
    {"id": 99, "name": "Bob"}
]

# Our Index (Dictionary)
# ID -> User Record
user_index = {}

# Build the index
for user in users_list:
    user_index[user["id"]] = user

print(user_index)
```

Now we can find user 99 instantly! ⚡️

## Try This!
Print `user_index[99]` to see how fast it is!
