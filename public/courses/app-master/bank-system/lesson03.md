# Return Values ↩️

Methods can give answers back.
This is useful for validation.
`return True` if successful, `False` if failed.

### The Logic
```python
def pay(self, cost):
    if self.money >= cost:
        self.money -= cost
        return True
    return False
```

### Your Goal
1. Define `Account`, `bal = 20`.
2. `pay(self, cost)` returns True/False.
3. Call `result = acc.pay(50)`.
4. Print "Success?" and `result`.

### Achievement
↩️ **Cashier**: You validated the purchase!
