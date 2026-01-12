# ========================================
# 🔢 CHALLENGE 2: Number Encoder
# ========================================

# Step 1: Get the word
word = input("Enter a word: ")

# Step 2: Loop through each letter
for letter in word:
    # Step 3: Get the secret number
    code = ord(letter)
    # Step 4: Print it
    print(letter, "=", code)
