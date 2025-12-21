# Return Values ↩️

Sometimes methods need to give back an answer.
"Did the transaction work?"
Return `True` or `False`.

### The Code
```python
def buy(self, cost):
    if cost <= self.money:
        self.money -= cost
        return True # Success
    return False # Failed
```

### Your Goal
1. `class Register`.
2. `scan(price)` returns price * 1.1 (Tax).
3. Call `total = r.scan(100)`.
4. Print total (110.0).

### Practical Use
APIs return status codes (200 OK, 404 Error) to let the caller know what happened.
