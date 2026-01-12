# The Vault 💰

## Your Mission
Money management is important! Today we're building a virtual bank account to track deposits and withdrawals.

## Sharing Information
In our bank app, different functions need to share the same `balance`. How do we do that?

## The Balance Variable
We create a variable OUTSIDE any function so everyone can see it:

```python
balance = 100  # Our starting money

def check_balance():
    print("Balance:", balance)
```

The `balance` variable is available everywhere in our program!

## Try It!
1. Run the code
2. See your balance displayed
3. Try changing the starting balance

## What You Learned
✅ Variables outside functions can be seen by everyone
✅ This is how we share data between functions
✅ Perfect for tracking things like money!

## Coming Up Next
We'll add deposit and withdraw functions! 💵
