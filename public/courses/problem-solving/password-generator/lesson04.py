import random
import string

letters = string.ascii_lowercase
password = ""

for i in range(5):
    char = random.choice(letters)
    password = password + char

print(password)
