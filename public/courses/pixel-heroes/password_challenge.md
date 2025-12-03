# Challenge: Custom Password Length

Challenge time! Let the user choose how long their password should be. Ask for the length, then generate a password with that many characters, mixing letters, numbers, and special characters!

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

**The trick:** `all_chars` combines ALL character types in one string. This mixes everything together automatically! Longer passwords = more secure!

Want to make it harder? Add a minimum length check (must be at least 8) - what if they type 3?
