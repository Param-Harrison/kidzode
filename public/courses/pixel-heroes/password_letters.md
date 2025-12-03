# Random Letter Passwords

Generate a password with 6 random letters!

## What to Do
1. Press Run
2. Run again for a different password!

```python
import random

# All possible letters
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

# Build a password with 6 random letters
password = ""

for i in range(6):
    random_letter = random.choice(letters)
    password = password + random_letter

print("=== PASSWORD GENERATOR ===")
print()
print(f"Your password is: {password}")
```

## Remember
- `letters` has all letters (uppercase and lowercase)
- `random.choice(letters)` picks one random letter
- Start with empty password: `password = ""`
- Each loop adds one letter

## Try This
Change `range(6)` to `range(8)` for 8 letters!

## If Stuck
- Make sure `import random` is at top
- Check the number in `range(6)`

You did it! ⭐
