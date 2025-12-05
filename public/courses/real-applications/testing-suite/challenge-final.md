# Final Challenge: Bank Tester 🏦

You are hired to test a **Bank System**.
The code is written, but it has no tests!

**The Code:**
```python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        self.balance -= amount
```

**Your Mission:**
1. Create a `BankTests` class.
2. Add `setup()` to create a `BankAccount` with $100.
3. Add `test_deposit()`: Deposit $50, assert balance is $150.
4. Add `test_withdraw()`: Withdraw $20, assert balance is $80.
5. Run the tests!

Go ensure our money is safe! 💰
