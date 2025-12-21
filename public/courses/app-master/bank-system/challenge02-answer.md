### Solution

```python
class Account:
    bal = 50
    
    def withdraw(self, amt):
        if amt > self.bal:
            return False
        else:
            self.bal -= amt
            return True

a = Account()
print(a.withdraw(100)) # False
print(a.withdraw(20))  # True
print("Remaining:", a.bal)
```
