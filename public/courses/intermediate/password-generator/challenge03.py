# ========================================
# 🎛️ CHALLENGE 3: Custom Password
# ========================================

import random

# Character bank
chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

# Ask for length
length = int(input("How long should the password be? "))

# Build the password
password = ""
for count in range(length):
    char = random.choice(chars)
    password = password + char

print("Your custom password is:", password)
