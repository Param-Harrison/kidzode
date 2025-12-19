import random

chars = "abcdefgh123456!@#$"
password = ""

# Loop 8 times for an 8-character password
for i in range(8):
    # Pick one random character
    char = random.choice(chars)
    # Add it to our password string
    password = password + char

print("Generated sequence:")
print(password)

# TRY THIS: Change the number 8 to make the password longer!
