# Solution

```python
db = [
    {"name": "Mario", "coins": 10},
    {"name": "Luigi", "coins": 50},
    {"name": "Peach", "coins": 100},
    {"name": "Toad", "coins": 5}
]

# 1. Filter (> 20 coins)
rich_players = [p for p in db if p["coins"] > 20]

# 2. Sort (by coins)
sorted_players = sorted(rich_players, key=lambda x: x["coins"])

# 3. Print
for p in sorted_players:
    print(f"{p['name']} has {p['coins']} coins")
```

Output:
```
Luigi has 50 coins
Peach has 100 coins
```
