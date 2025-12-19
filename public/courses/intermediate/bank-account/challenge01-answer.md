### One way to solve it:

```python
balance = 1000

def add_interest(rate):
    global balance
    earned = balance * rate
    balance += earned
    return earned

# Add 5% interest
interest = add_interest(0.05)

print(f"You earned ${interest} in interest!")
print(f"New Balance: ${balance}")
```
