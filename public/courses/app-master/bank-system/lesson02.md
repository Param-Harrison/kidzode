# Withdraw Logic 💸

Taking money out requires a CHECK.
Do you have enough money?
`if amount <= self.balance:`.

### The Code
```python
def withdraw(self, amount):
    if amount <= self.balance:
        self.balance -= amount
    else:
        print("Not enough funds!")
```

### Your Goal
1. `class ATM` with `cash = 100`.
2. `take(self, amount)`.
3. Try to take 50 (Success).
4. Try to take 200 (Fail, print error).
5. Print remaining cash.

### Practical Use
This simple `if` statement prevents you from spending money you don't have.
