# ========================================
# ↩️ CHALLENGE 3: Decoder Ring
# ========================================

# Step 1: Secret numbers
codes = [72, 69, 76, 76, 79]

# Step 2: Decode each number
message = ""
for code in codes:
    letter = chr(code)
    message = message + letter

# Step 3: Print the result
print("The secret message is:", message)
