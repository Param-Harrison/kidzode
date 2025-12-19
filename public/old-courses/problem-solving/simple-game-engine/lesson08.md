# Take Damage

Ouch! We got hit!
We need a method to lower health.

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def take_damage(self, damage):
        self.health = self.health - damage
        print(f"{self.name} took {damage} damage!")

p1 = Player("Mario")
p1.take_damage(20)
print(f"Health: {p1.health}")
```

You'll see:
```
Mario took 20 damage!
Health: 80
```

We changed the property inside the method!

## Try This!
Take 100 damage and see if health goes to 0!
