# Add Numbers

Make your password stronger by adding numbers! Press Run and get a password with 6 letters AND 2 numbers!

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

**The trick:** `numbers = "0123456789"` has all the digits. Use TWO loops - one for letters, one for numbers. `len(password)` tells you how long it is. Numbers go at the end - that's normal!

Try changing to 8 letters and 4 numbers - make it even stronger!
