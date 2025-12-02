# Create Random Letter Passwords

Welcome, Game Designer! You've created amazing adventures!
Now let's build something USEFUL - an unbreakable password creator!
Can you make Python generate random passwords?

## 🎯 Today's Mission
Generate a password with 6 random letters!

## Let's Do It!
1. Read the code - see how we pick random letters!
2. Press the green **Run** button
3. Run it again for a different password!

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

## ✨ Magic Moment
A random 6-letter password appears - different every time!

## 💡 Important Things to Remember
- `letters` is a string containing all letters (uppercase and lowercase)
- `random.choice(letters)` picks one random letter
- We start with an empty password: `password = ""`
- Each loop adds one more letter: `password = password + random_letter`
- After 6 loops, we have a 6-letter password!

## 🎨 Try This Next!
Change `range(6)` to `range(8)` for an 8-letter password!

## 🤔 Stuck? Check This!
- **Same password every time?** That's just luck - keep running it!
- **Error: random not defined?** Make sure you have `import random` at the top
- **Password too short?** Check the number in `range(6)`

## 🌟 Show Your Parents!
"Look! I made a password generator - it creates random passwords for security!"

You just unlocked the **Security Expert** superpower! ⭐
