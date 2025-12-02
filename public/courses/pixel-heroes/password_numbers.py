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
