expenses = [
    {"item": "Toy", "cost": 20},
    {"item": "Candy", "cost": 5}
]

total = 0
for e in expenses:
    total = total + e["cost"]

print(f"Total Spent: ${total}")
