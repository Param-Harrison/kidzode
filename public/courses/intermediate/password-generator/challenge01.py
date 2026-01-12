# ========================================
# 🏆 CHALLENGE 1: Super Secure
# ========================================

import random

# Character bank
chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%"

# Step 1: Ask for length
length = int(input("How many characters? "))

# Step 2: Build the password
password = ""
for count in range(length):
    char = random.choice(chars)
    password = password + char

# Step 3: Print it
print("Your password is:", password)

# Bonus: Check if it's strong
if length >= 10:
    print("STRONG! 💪")
