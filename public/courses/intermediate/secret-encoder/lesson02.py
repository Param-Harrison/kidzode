# ========================================
# ⚙️ LESSON 2: The Simple Shift
# ========================================

letter = "A"
shift = 1

# Step 1: Get the secret number
code = ord(letter)

# Step 2: Add the shift
new_code = code + shift

# Step 3: Turn back into a letter
secret_letter = chr(new_code)

print("Original letter:", letter)
print("After shifting by", shift, ":", secret_letter)

# ----------------------------------------
# 🎮 TRY THIS:
# Change shift from 1 to 5!
# What does "A" become?
# ----------------------------------------
