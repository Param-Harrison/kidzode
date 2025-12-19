### One way to solve it:

```python
msg = input("Enter message: ")
shift = int(input("Enter shift: "))
mode = input("Encode (E) or Decode (D)? ").upper()

if mode == "D":
    shift = -shift

result = ""

for char in msg:
    result += chr(ord(char) + shift)

print(f"Result: {result}")
```
