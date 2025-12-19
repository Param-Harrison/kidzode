word = "Python"
shift = 1
secret = ""

for char in word:
    # 1. Get code
    code = ord(char)
    # 2. Shift and convert back
    new_char = chr(code + shift)
    # 3. Add to secret
    secret += new_char

print(f"Original: {word}")
print(f"Secret: {secret}")

# TRY THIS: Try encoding your name!
