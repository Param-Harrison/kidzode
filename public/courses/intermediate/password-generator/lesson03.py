import random

chars = "abcdefgh123456!@#$"

# This is a one-line way to loop and pick characters
parts = [random.choice(chars) for i in range(12)]

# Join them into one string
password = "".join(parts)

print("Pro Password:")
print(password)

# TRY THIS: Change the "" to "-" and see what happens to the password!
