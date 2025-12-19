### One way to solve it:

```python
import random

chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"

length = int(input("How long should the password be? "))
password = ""

for i in range(length):
    password += random.choice(chars)

print(f"Your secure password is: {password}")

if length >= 12:
    print("Locked & Loaded! 🛡️")
elif length >= 8:
    print("Pretty secure! 🗝️")
else:
    print("Warning: Too short! ⚠️")
```
