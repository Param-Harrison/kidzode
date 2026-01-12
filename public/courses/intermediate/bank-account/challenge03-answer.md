# Answer: Daily Limit ✅

```python
balance = 500
withdrawn_today = 0
daily_limit = 100

def limited_withdraw(amount):
    global balance, withdrawn_today
    
    if withdrawn_today + amount > daily_limit:
        print("Would exceed daily limit!")
    elif amount > balance:
        print("Not enough money!")
    else:
        balance = balance - amount
        withdrawn_today = withdrawn_today + amount
        print("Withdrew $" + str(amount))

limited_withdraw(50)
limited_withdraw(60)
limited_withdraw(40)
print("Total withdrawn: $" + str(withdrawn_today))
```
