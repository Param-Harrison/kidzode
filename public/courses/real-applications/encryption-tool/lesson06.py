char_code = ord("A")
key = 42

secret = char_code ^ key
print(f"Secret Number: {secret}")

original = secret ^ key
print(f"Original Number: {original} -> {chr(original)}")
