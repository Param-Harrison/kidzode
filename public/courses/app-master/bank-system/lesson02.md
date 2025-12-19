# Withdraw Logic 💸

We need to take money out.
But wait! What if you don't have enough?
We need an **IF** check inside the method.

### The Logic
```python
def withdraw(self, amt):
    if self.bal >= amt:
        self.bal -= amt
    else:
        print("Broke!")
```

### Your Goal
1. Define `Account` with `self.bal = 50`.
2. Add `withdraw(self, amount)`.
3. Check if enough money. If yes, subtract.
4. Try to withdraw 10.
5. Try to withdraw 100.

### Achievement
💸 **Security Guard**: You prevented theft!
