# Spending Advice

Let's give advice based on spending!

```python
expenses = [
    {"item": "Game", "cost": 60, "category": "Fun"},
    {"item": "Food", "cost": 10, "category": "Food"}
]

fun_total = 0
for e in expenses:
    if e["category"] == "Fun":
        fun_total = fun_total + e["cost"]

if fun_total > 50:
    print("Advice: Spend less on Fun! 🎮")
else:
    print("Advice: Good balance! ⚖️")
```

You'll see:
```
Advice: Spend less on Fun! 🎮
```

A personal finance advisor in Python!

## Try This!
Change the Game cost to 20. What's the advice?
