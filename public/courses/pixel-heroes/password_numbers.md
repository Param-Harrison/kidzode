# Add Numbers

Create a password with 6 letters AND 2 numbers!

## What to Do
1. Press Run
2. Get a stronger password!

```python
import random

# All possible characters
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
numbers = "0123456789"

# Build password with 6 letters
password = ""

for i in range(6):
    password = password + random.choice(letters)

# Add 2 numbers
for i in range(2):
    password = password + random.choice(numbers)

print("=== STRONG PASSWORD GENERATOR ===")
print()
print(f"Your password is: {password}")
print(f"Length: {len(password)} characters")
```

## Remember
- `numbers = "0123456789"` has all digits
- Use TWO loops - one for letters, one for numbers
- `len(password)` tells how long it is

## Try This
Change to 8 letters and 4 numbers!

## If Stuck
- Make sure you have the second `for` loop
- Numbers go at the end, that's normal!

You did it! ⭐
