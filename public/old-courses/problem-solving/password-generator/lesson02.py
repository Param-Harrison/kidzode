import random
import string

letters = string.ascii_lowercase
secret = random.choice(letters)

print(f"Secret letter: {secret}")
