# Answer: PIN Code Maker ✅

```python
import random

numbers = "0123456789"
pin = ""

for count in range(4):
    digit = random.choice(numbers)
    pin = pin + digit

print("Your secure PIN is:", pin)
```
