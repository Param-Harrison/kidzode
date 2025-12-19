# The Z Problem

If we shift "Z" by 1, we get `[` (symbol).
We want "A"! We need to loop back around.
The math trick is **Modulo** `%`.

```python
def shift_char(char, key):
    # Only shift if it's a letter
    if char.isalpha():
        start = ord('A') if char.isupper() else ord('a')
        
        # 0-25 range
        offset = ord(char) - start
        
        # Shift and Wrap
        new_offset = (offset + key) % 26
        
        return chr(start + new_offset)
    return char

print(shift_char("Z", 1))
```

You'll see: `A`. Perfect rotation! 🎡

## Try This!
Shift "z" (lowercase) by 2. It should be "b".
