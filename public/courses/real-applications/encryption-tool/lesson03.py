def encrypt(text, key):
    result = ""
    for char in text:
        new_code = ord(char) + key
        result += chr(new_code)
    return result

print(f"ABC + 1 = {encrypt('ABC', 1)}")
# Note: This version might produce symbols if we go past 'Z'
