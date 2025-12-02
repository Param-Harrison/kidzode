# Custom Password Length Challenge

Perfect, Unbreakable Security master! Your passwords are super strong!
But different websites need different password lengths!
Can you let the user choose how long their password should be?

## 🎯 Today's Mission
Let the user choose the password length!

## 📚 Before You Start
You know how to use `input()`, `int()`, and generate random passwords.

## Your Challenge!
1. Ask the user how long they want their password
2. Generate a password with that many characters
3. Mix letters, numbers, and special characters!

```python
import random

# All possible characters
all_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

print("=== CUSTOM PASSWORD GENERATOR ===")
print()

# Ask user for password length
length = input("How long should your password be? (8-20): ")
password_length = int(length)

# Generate password
password = ""

for i in range(password_length):
    password = password + random.choice(all_chars)

print()
print(f"Your {password_length}-character password is:")
print(password)
print()
print("Copy this password and keep it safe!")
```

## ✨ Magic Moment
You can create passwords of ANY length you want!

## 💡 Important Things to Remember
- `all_chars` combines ALL character types in one string
- This makes the password more mixed up (letters, numbers, symbols together)
- The user controls the length with their input
- Longer passwords = more secure!

## 🎨 Try This Next!
- Add a minimum length check (must be at least 8)
- Show password strength (weak/medium/strong)
- Generate multiple passwords at once
- Add lowercase/uppercase only options

## 🤔 Stuck? Check This!
- **Error: invalid literal?** Make sure you're using `int(length)`
- **Password too short?** Check the user entered a number
- **Want better mixing?** Using `all_chars` mixes everything automatically!

## 🌟 Show Your Parents!
"Look! I made a professional password generator - just like real security tools!"

You just unlocked the **Professional Security Tool Creator** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 9! 🎉
