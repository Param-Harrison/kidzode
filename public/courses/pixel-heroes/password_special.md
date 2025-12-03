# Add Special Characters

Create passwords with letters, numbers, AND special characters!

## What to Do
1. Press Run
2. Get an unbreakable password!

```python
import random

# All possible characters
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
numbers = "0123456789"
special = "!@#$%^&*"

# Build password with all types
password = ""

# Add 5 letters
for i in range(5):
    password = password + random.choice(letters)

# Add 3 numbers
for i in range(3):
    password = password + random.choice(numbers)

# Add 2 special characters
for i in range(2):
    password = password + random.choice(special)

print("=== UNBREAKABLE PASSWORD GENERATOR ===")
print()
print(f"Your password is: {password}")
print(f"Length: {len(password)} characters")
print()
print("This password is SUPER STRONG!")
```

## Remember
- Special characters like `!@#$` make passwords stronger
- Use THREE loops - one for each type
- More variety = harder to crack!

## Try This
Add more special characters like `+-=_`!

## If Stuck
- Make sure you have the third loop
- Change what's in the `special` string

You did it! ⭐
