# ========================================
# 🛠️ LESSON 3: Joining the Pieces
# ========================================

import random

# Our character bank
chars = "abcdefgh123456!@#$"

# Step 1: Pick 12 random characters and put them in a list
parts = []
for count in range(12):
    char = random.choice(chars)
    parts.append(char)

# Step 2: Join them all together into one string
password = "".join(parts)

print("Your password:")
print(password)

# ----------------------------------------
# 🎮 TRY THIS:
# Change the "" to "-" and see what happens!
# password = "-".join(parts)
# ----------------------------------------
