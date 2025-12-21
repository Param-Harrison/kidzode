### Solution

```python
class Fighter:
    def __init__(self, name, hp, power):
        self.name = name
        self.hp = hp
        self.power = power
    
    def attack(self, target):
        target.hp -= self.power

f1 = Fighter("A", 100, 10)
f2 = Fighter("B", 80, 12)

while f1.hp > 0 and f2.hp > 0:
    f1.attack(f2)
    f2.attack(f1)
    print("Clash!")

print("Game Over")
```
