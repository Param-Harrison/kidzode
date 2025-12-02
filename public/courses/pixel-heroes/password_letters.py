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
