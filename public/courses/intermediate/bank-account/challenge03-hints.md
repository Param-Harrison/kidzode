# Hints for Challenge 3: Daily Limit 💡

### Hint 1: Track withdrawals
```python
withdrawn_today = 0
```

### Hint 2: Check before withdrawing
```python
if withdrawn_today + amount > daily_limit:
    print("Would exceed limit!")
```

### Hint 3: Update the tracker
```python
withdrawn_today = withdrawn_today + amount
```

Stay safe! 🛡️
