# Add Special Characters

Awesome, Strong Password Creator! Your passwords are getting better!
But the STRONGEST passwords have special characters too!
Can you add symbols like ! @ # $ to make unbreakable passwords?

## 🎯 Today's Mission
Create passwords with letters, numbers, AND special characters!

## 📚 Before You Start
You know how to combine letters and numbers in passwords.

## Let's Do It!
1. Read the code - see the special characters!
2. Press the green **Run** button
3. Get an unbreakable password!

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

## ✨ Magic Moment
Your password has letters, numbers, AND special characters - unbreakable!

## 💡 Important Things to Remember
- Special characters like `!@#$` make passwords much stronger
- We use THREE loops - one for each type of character
- The more variety, the harder to crack!
- Real websites require passwords like this!

## 🎨 Try This Next!
Add more special characters to the `special` string! Try `+-=_`

## 🤔 Stuck? Check This!
- **No special characters?** Make sure you have the third loop
- **Want different symbols?** Change what's in the `special` string
- **All grouped together?** That's okay! Still very secure!

## 🌟 Show Your Parents!
"Look! I made an unbreakable password generator with letters, numbers, and symbols!"

You just unlocked the **Unbreakable Security** superpower! ⭐
