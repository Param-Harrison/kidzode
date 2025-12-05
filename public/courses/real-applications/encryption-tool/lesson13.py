import random
import string

alphabet = list(string.ascii_lowercase)
shuffled = alphabet[:]
random.shuffle(shuffled)

mapping = dict(zip(alphabet, shuffled))

text = "hello"
cipher = ""
for char in text:
    if char in mapping:
        cipher += mapping[char]
    else:
        cipher += char

print(f"Original: {text}")
print(f"Cipher:   {cipher}")
