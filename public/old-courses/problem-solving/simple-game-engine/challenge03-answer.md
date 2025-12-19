# Solution

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def attack(self, target):
        print(f"{self.name} attacks {target.name}!")

p1 = Player("Batman")
p2 = Player("Joker")

p1.attack(p2)
```

Output:
```
Batman attacks Joker!
```

Epic battle! 🦇
