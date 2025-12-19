letter = "A"
shift = 1

# Step 1: Get the code
code = ord(letter)

# Step 2: Add the shift
new_code = code + shift

# Step 3: Turn back to letter
secret_letter = chr(new_code)

print(f"Original: {letter}")
print(f"Secret: {secret_letter}")

# TRY THIS: Change the shift from 1 to 5!
