### Solution

```python
import random

class Fighter:
    def __init__(self, hp, power):
        self.hp = hp
        self.power = power
    
    def attack(self, target):
        roll = random.randint(1, 10)
        damage = self.power
        if roll == 10:
            damage = damage * 2
            print("CRITICAL HIT!")
        
        target.hp -= damage

f1 = Fighter(100, 100)
f2 = Fighter(100, 10)

# Try until we get a crit? it's random!
f2.attack(f1)
print(f1.hp)
```
