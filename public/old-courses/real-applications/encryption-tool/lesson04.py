def shift_char(char, key):
    if char.isalpha():
        # Determine if uppercase or lowercase base
        base = ord('A') if char.isupper() else ord('a')
        
        val = ord(char) - base # 0-25
        new_val = (val + key) % 26 # Wrap around
        
        return chr(base + new_val)
    return char

print(f"Z + 1 = {shift_char('Z', 1)}")
print(f"z + 5 = {shift_char('z', 5)}")
