# Solution

```python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        self.balance -= amount

class BankTests:
    def setup(self):
        self.account = BankAccount(100)

    def test_deposit(self):
        self.setup()
        self.account.deposit(50)
        assert self.account.balance == 150
        print("Deposit Passed")

    def test_withdraw(self):
        self.setup()
        self.account.withdraw(20)
        assert self.account.balance == 80
        print("Withdraw Passed")
    
    def run(self):
        self.test_deposit()
        self.test_withdraw()
        print("Money is Safe! 🏦")

BankTests().run()
```
