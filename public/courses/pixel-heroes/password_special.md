# Add Special Characters

Make your password unbreakable! Add special characters like `!@#$` to make it super strong. Press Run and get an unbreakable password!

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

**The secret:** Special characters like `!@#$` make passwords stronger! Use THREE loops - one for each type. More variety = harder to crack!

Try adding more special characters like `+-=_` - make it even stronger!
