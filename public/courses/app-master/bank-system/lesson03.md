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
1. `class ATM`.
2. `get_fee(amount)` returns amount * 0.05 (Service Fee).
3. Call `fee = a.get_fee(200)`.
4. Print fee (10.0).

### Practical Use
APIs return status codes (200 OK, 404 Error) to let the caller know what happened.
