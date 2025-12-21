## Welcome to Bank System! 💰
Ready to manage the world's wealth? We're going to build a professional-grade banking engine that handles deposits, withdrawals, and balances in a digital vault!

# Deposit Method 💰

A Bank Account is a class with a `balance`.
To add money, we need a `deposit` method.
Logic: `self.balance += amount`.

### The Code
```python
class Account:
    balance = 0
    def deposit(self, money):
        self.balance += money
```

### Your Goal
1. Define `PiggyBank` with `total = 0`.
2. Add `add_coin(self, value)`.
3. Add 5. Add 10.
4. Print total (15).

### Practical Use
Every financial app works like this. The logic is encapsulated inside the class to prevent bugs.
