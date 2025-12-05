# Helper from Lesson 4
def shift_char(char, key):
    if char.isalpha():
        base = ord('A') if char.isupper() else ord('a')
        return chr(base + (ord(char) - base + key) % 26)
    return char

def caesar_encrypt(text, key):
    result = ""
    for char in text:
        result += shift_char(char, key)
    return result

secret = caesar_encrypt("Hello World!", 3)
print(f"Encrypted: {secret}")

plain = caesar_encrypt(secret, -3) # Negative key decrypts!
print(f"Decrypted: {plain}")
