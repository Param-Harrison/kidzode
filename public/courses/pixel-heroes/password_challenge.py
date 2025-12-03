import random

# All possible characters
all_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

print("=== CUSTOM PASSWORD GENERATOR ===")
print()

# Ask user for password length
length = input("How long should your password be? (8-20): ")
password_length = int(length)

# YOUR TURN! Generate password
# HINT: Start with empty string: password = ""
# HINT: Use a for loop to add random characters
# HINT: Inside loop: password = password + random.choice(all_chars)
# Your code here:

print()
print(f"Your {password_length}-character password is:")
# YOUR TURN! Print the password
# HINT: print(password)
# Your code here:

print()
print("Copy this password and keep it safe!")
