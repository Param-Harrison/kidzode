### One way to solve it:

```python
balance = 100
limit = 50

def withdraw(amount):
    global balance
    
    if amount > limit:
        print("❌ Error: Over daily limit!")
    elif amount > balance:
        print("❌ Error: Not enough money!")
    else:
        balance -= amount
        print(f"✅ Withdrew ${amount}")

print("--- ATM ---")
withdraw(60)  # Too big
withdraw(20)  # Okay!
```
