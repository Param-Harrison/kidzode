# Here there become Dragons 🐉

What is an adventure without danger?
Let's add `Monster` class.

```python
class Monster:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
    
    def take_damage(self, amount):
        self.hp -= amount
        if self.hp <= 0:
            print(f"The {self.name} is defeated!")
            return True # Dead
        return False # Alive
```

Now we need an `attack` command! ⚔️

## Try This!
Create a "Dragon" with 50 HP and punch it!
