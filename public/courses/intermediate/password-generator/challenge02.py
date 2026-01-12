# ========================================
# 🔢 CHALLENGE 2: PIN Code Maker
# ========================================

import random

# Only numbers for PINs
numbers = "0123456789"

# Start empty
pin = ""

# Pick 4 random digits
for count in range(4):
    digit = random.choice(numbers)
    pin = pin + digit

print("Your secure PIN is:", pin)
