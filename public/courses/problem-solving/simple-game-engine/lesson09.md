# Heal Method

We took damage! We need a potion! 🧪

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 50 # Low health!

    def heal(self, amount):
        self.health = self.health + amount
        print(f"{self.name} healed {amount} HP!")

p1 = Player("Link")
print(f"Health: {p1.health}")

p1.heal(30)
print(f"Health: {p1.health}")
```

You'll see:
```
Link healed 30 HP!
Health: 80
```

Feeling better!

## Try This!
Make sure health doesn't go above 100! (Use `if` inside `heal`)
