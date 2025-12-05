letter = "A"
number = ord(letter)

print(f"'{letter}' is actually {number}")

# Add 1 to get the next letter
new_number = number + 1
new_letter = chr(new_number)

print(f"{number} + 1 = {new_number} which is '{new_letter}'")
