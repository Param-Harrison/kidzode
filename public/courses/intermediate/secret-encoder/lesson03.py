# ========================================
# 📝 LESSON 3: Encoding a Word
# ========================================

word = "Python"
shift = 1
secret = ""

# Go through each letter in the word
for letter in word:
    # Step 1: Get the number
    code = ord(letter)
    
    # Step 2: Add the shift
    new_code = code + shift
    
    # Step 3: Turn back to letter
    new_letter = chr(new_code)
    
    # Step 4: Add to our secret message
    secret = secret + new_letter

print("Original:", word)
print("Secret:", secret)

# ----------------------------------------
# 🎮 TRY THIS:
# Change "Python" to your name!
# Change shift to 3!
# ----------------------------------------
