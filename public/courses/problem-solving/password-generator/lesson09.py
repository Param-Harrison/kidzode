import random
import string

length = 12
chars = string.ascii_letters + string.digits + string.punctuation
password = ""

for i in range(length):
    password = password + random.choice(chars)

print(f"Password ({length} chars): {password}")
