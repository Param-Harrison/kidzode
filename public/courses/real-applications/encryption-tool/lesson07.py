def xor_encrypt(text, key):
    result = ""
    for char in text:
        result += chr(ord(char) ^ key)
    return result

msg = "Hello World"
key = 55

cipher = xor_encrypt(msg, key)
print(f"Cipher: {cipher}")

plain = xor_encrypt(cipher, key)
print(f"Plain:  {plain}")
