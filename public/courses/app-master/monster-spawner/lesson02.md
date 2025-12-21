# Random Varieties 🎲

Not all enemies are identical.
Use `random` to give them different levels or types.

### The Code
```python
import random

class Orc:
    def __init__(self):
        self.level = random.randint(1, 10)

o = Orc()
print(o.level)
```

### Your Goal
1. Import random.
2. Define `Slime` with `self.color`.
3. Select color from `["Green", "Blue", "Red"]`.
4. Spawn 3 slimes and print their colors.

### Practical Use
This is how "Procedural Generation" works in games like Minecraft.
