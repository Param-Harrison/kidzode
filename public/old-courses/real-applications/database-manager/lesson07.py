users = [
    {"name": "Alice", "age": 10},
    {"name": "Bob", "age": 18},
    {"name": "Charlie", "age": 20}
]

adults = [u for u in users if u["age"] > 15]

print(adults)
