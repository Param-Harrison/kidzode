expenses = [
    {"item": "Burger", "cost": 10, "category": "Food"},
    {"item": "Game", "cost": 50, "category": "Fun"},
    {"item": "Fries", "cost": 5, "category": "Food"}
]

categories = {}

for e in expenses:
    cat = e["category"]
    cost = e["cost"]
    
    if cat in categories:
        categories[cat] = categories[cat] + cost
    else:
        categories[cat] = cost

print(categories)
