# Hints

## 🟢 Hint 1
Create the class: `class BankTests:`

## 🟡 Hint 2
Setup:
```python
def setup(self):
    self.account = BankAccount(100)
```

## 🟠 Hint 3
Test Deposit:
```python
def test_deposit(self):
    self.setup()
    self.account.deposit(50)
    assert self.account.balance == 150
```

## 🔴 Hint 4
Don't forget to run it: `BankTests().test_deposit()`
