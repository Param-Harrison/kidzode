# Deposit & Withdraw 💸

## Quick Reminder
You created a shared `balance` variable. Now let's make functions that can CHANGE it!

## Your Mission
We need deposit (add money) and withdraw (take money) functions!

## The global Keyword
When a function wants to CHANGE a shared variable, it needs to say `global`:

```python
balance = 100

def deposit(amount):
    global balance   # I want to change the shared balance!
    balance = balance + amount
```

Without `global`, Python would create a NEW variable inside the function instead of changing the shared one.

## Try It!
1. Run the code
2. Watch the deposit and withdraw work
3. Try adding your own deposit!

## What You Learned
✅ `global balance` lets you CHANGE the shared variable
✅ Functions can take "parameters" like `amount`
✅ `balance += 50` is shorthand for `balance = balance + 50`
