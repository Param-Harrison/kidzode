# Reading and Writing Secrets

Real tools encrypt **Files**.
We read bytes `rb`, encrypt them, and write bytes `wb`.

```python
# Fake encrypt (add 1 to every byte)
def encrypt_file(filename):
    with open(filename, "rb") as f:
        data = f.read()
    
    encrypted_data = bytes([(b + 1) % 256 for b in data])
    
    with open(filename + ".enc", "wb") as f:
        f.write(encrypted_data)

# encrypt_file("secret.txt")
```

Creates `secret.txt.enc`. It's binary gobbledegook! 👾

## Try This!
Create a "test.txt", run this, and try to open the `.enc` file in a text editor!
