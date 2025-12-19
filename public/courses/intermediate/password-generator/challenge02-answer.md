### One way to solve it:

```python
import random

numbers = "0123456789"
pin = ""

print("--- BANK SECURITY ---")
for i in range(4):
    pin += random.choice(numbers)

print("Your secure PIN is:", pin)
```
