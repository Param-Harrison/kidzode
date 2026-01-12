# Safety Checks 🛑

## Quick Reminder
You made deposit and withdraw work. But what if someone tries to withdraw MORE than they have?

## Your Mission
A good engineer thinks about what could go wrong! Let's add safety checks.

## The Problem
If balance is $50 and someone withdraws $100, the balance goes to -$50. That shouldn't happen!

## The Solution: Check First!
```python
def safe_withdraw(amount):
    global balance
    if amount > balance:
        print("ERROR: Not enough money!")
    else:
        balance = balance - amount
        print("Success!")
```

## Try It!
1. Run the code
2. Watch the first withdraw fail (not enough money)
3. Watch the second withdraw work

## What You Learned
✅ Always check for problems BEFORE doing something
✅ Use `if` to check conditions
✅ Show helpful error messages

## Achievement Unlocked! 🏆
You've built a safe banking system!
