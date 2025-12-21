# The Fighter Class ⚔️

A Game is just objects changing each other's state.
We need a `Fighter` class with `hp` and `strength`.

### The Code
```python
class Fighter:
    def __init__(self, name, hp, strength):
        self.name = name
        self.hp = hp
        self.strength = strength
```

### Your Goal
1. Define `Fighter`.
2. Create `hero = Fighter("Hero", 100, 10)`.
3. Create `boss = Fighter("Boss", 500, 50)`.
4. Print both their HP.

### Practical Use
This blueprint is the foundation for every RPG, from Pokémon to Final Fantasy.
