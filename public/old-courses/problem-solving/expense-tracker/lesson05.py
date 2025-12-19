expenses = [
    {"item": "Burger", "cost": 10, "category": "Food"},
    {"item": "Game", "cost": 50, "category": "Fun"},
    {"item": "Fries", "cost": 5, "category": "Food"}
]

food_total = 0
for e in expenses:
    if e["category"] == "Food":
        food_total = food_total + e["cost"]

print(f"Food Total: ${food_total}")
