expenses = [
    {"item": "Burger", "cost": 10, "category": "Food"},
    {"item": "Game", "cost": 50, "category": "Fun"}
]

# Get only Food items
food_items = [e for e in expenses if e["category"] == "Food"]

print(food_items)
