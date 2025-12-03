# Random Letter Passwords

Create a password generator that makes random passwords! Press Run, then run it again - you'll get a different password each time!

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

**The trick:** Start with an empty password `password = ""`. Each time through the loop, pick a random letter and add it to the password. `random.choice(letters)` picks one random letter from all the letters.

Try changing `range(6)` to `range(8)` for 8 letters, or `range(12)` for a super long password!
