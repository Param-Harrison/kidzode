# What is a Database?

A **Database** is a place to store data in an organized way.
We organize data into **Tables**.

Think of a spreadsheet:
- **Table**: A sheet (e.g., "Users")
- **Columns**: Properties (Name, Age)
- **Rows**: The actual data (Alice, 10)

In Python, we can simulate this with a **List of Dictionaries**!

```python
# A simple database of users
users_table = [
    {"id": 1, "name": "Alice", "age": 10},
    {"id": 2, "name": "Bob", "age": 12}
]

print(users_table)
```

You'll see:
```
[{'id': 1, 'name': 'Alice', 'age': 10}, {'id': 2, 'name': 'Bob', 'age': 12}]
```

## Try This!
Add a 3rd user "Charlie" to the list!
