# Vigenere Logic
# Text: H E L L O
# Key:  A B C A B
# Shift:0 1 2 0 1
# Res:  H F N L P

def vigenere_encrypt(text, key_shifts):
    res = ""
    for i, char in enumerate(text):
        shift = key_shifts[i % len(key_shifts)]
        res += chr(ord(char) + shift)
    return res

print(vigenere_encrypt("HELLO", [0, 1, 2]))
