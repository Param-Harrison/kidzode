### Solution

```python
class Bank:
    def __init__(self, bal):
        self.balance = bal
    
    def transfer(self, target, amount):
        self.balance -= amount
        target.balance += amount

a1 = Bank(100)
a2 = Bank(0)

a1.transfer(a2, 50)

print("A1:", a1.balance)
print("A2:", a2.balance)
```
