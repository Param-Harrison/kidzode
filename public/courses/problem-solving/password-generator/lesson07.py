import random
import string

all_chars = string.ascii_lowercase + string.digits
password = ""

for i in range(8):
    password = password + random.choice(all_chars)

print(password)
