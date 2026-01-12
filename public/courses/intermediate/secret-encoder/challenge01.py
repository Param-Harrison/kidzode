# ========================================
# 🏆 CHALLENGE 1: Secret Agent Encoder
# ========================================

# Step 1: Get the message
message = input("Enter your secret message: ")

# Step 2: Get the shift
shift = int(input("Enter the shift number: "))

# Step 3: Encode each letter
secret = ""
for letter in message:
    code = ord(letter)
    new_code = code + shift
    new_letter = chr(new_code)
    secret = secret + new_letter

# Step 4: Print the result
print("Your secret message is:", secret)
