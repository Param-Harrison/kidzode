# Player Class

Let's start our game engine!
We need a `Player` with health.

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def show_stats(self):
        print(f"{self.name}: {self.health} HP")

p1 = Player("Mario")
p1.show_stats()
```

You'll see:
```
Mario: 100 HP
```

This is the start of every RPG!

## Try This!
Create a player named "Luigi" and show his stats!
