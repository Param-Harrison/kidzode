# Solution

```python
my_expenses = []

my_expenses.append({"item": "Lunch", "cost": 10.50})
my_expenses.append({"item": "Bus", "cost": 2.50})
my_expenses.append({"item": "Snack", "cost": 5.00})
my_expenses.append({"item": "Book", "cost": 15.00})
my_expenses.append({"item": "Game", "cost": 20.00})

total = 0
for e in my_expenses:
    total = total + e["cost"]

print(f"Total Spent: ${total}")
```

Output:
```
Total Spent: $53.0
```

You are a budget master! 💰
