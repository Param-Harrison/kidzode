# RPG Stats 📊

The player needs Health too.
And maybe Attack Power?

```python
class Player:
    def __init__(self):
        self.hp = 100
        self.attack = 10
        self.inventory = []

    def is_alive(self):
        return self.hp > 0
```

When you fight a monster, it fights back!
`player.hp -= monster.attack`

## Try This!
Create a simple combat loop where they trade hits until one falls.
