### One way to solve it:

```python
import random

powers = ["Teleportation", "Ice Breath", "Healing", "Nature Control"]
name = input("Enter your hero name: ")

power = random.choice(powers)

print("\n--- HERO DATA ---")
print("NAME:", name)
print("POWER:", power)
print("-----------------")
```
