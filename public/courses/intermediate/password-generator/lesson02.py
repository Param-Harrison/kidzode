# ========================================
# ➰ LESSON 2: Building the Password
# ========================================

import random

# Our character bank
chars = "abcdefgh123456!@#$"

# Start with an empty password
password = ""

# Pick 8 random characters, one at a time
for count in range(8):
    # Pick one random character from our bank
    char = random.choice(chars)
    # Add it to the password
    password = password + char

print("Your password:")
print(password)

# ----------------------------------------
# 🎮 TRY THIS:
# Change range(8) to range(12) for a longer password!
# ----------------------------------------
