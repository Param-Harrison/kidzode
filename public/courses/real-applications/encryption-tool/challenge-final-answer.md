# Solution

```python
import sys
import os

# Create dummy file if not exists
if not os.path.exists("test.txt"):
    with open("test.txt", "w") as f:
        f.write("Secret Data")

def process(filename, key):
    with open(filename, "rb") as f:
        data = f.read()
    
    # XOR Key (Wrap to 255)
    k = int(key) % 255
    out = bytes([b ^ k for b in data])
    
    return out

# Simulate CLI
cmd = "encrypt" # or decrypt
file = "test.txt"
key = "55"

if cmd == "encrypt":
    out_data = process(file, key)
    with open(file + ".enc", "wb") as f:
        f.write(out_data)
    print("Encrypted!")

elif cmd == "decrypt":
    out_data = process(file + ".enc", key)
    with open(file + ".dec", "wb") as f:
        f.write(out_data)
    print("Decrypted!")
```
