# Answer

Here's the complete solution:

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

**Remember:** Try solving it yourself first! Understanding how loops build strings is more important than just copying the answer. You can add a minimum length check too!

