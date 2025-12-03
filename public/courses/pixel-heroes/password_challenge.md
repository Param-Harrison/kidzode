# Challenge: Custom Password Length

Let the user choose how long their password should be!

## What to Do
1. Ask for password length
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

## Remember
- `all_chars` combines ALL character types
- This mixes everything together
- Longer passwords = more secure!

## Try This
Add a minimum length check (must be at least 8)!

## If Stuck
- Use `int(length)` to convert
- Using `all_chars` mixes everything automatically!

**CHALLENGE COMPLETE!** 🎉
