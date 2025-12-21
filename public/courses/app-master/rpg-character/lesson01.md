## Welcome to RPG Character! 🧙‍♂️
From humble beginnings to legendary heroes, we're going to build a character system that tracks the growth and stats of your favorite adventurers!

# Multiple Instances 👯

The power of OOP is creating MANY objects from ONE class.
Each object has its own memory.

### The Code
```python
class Hero:
    hp = 100

h1 = Hero()
h2 = Hero()

h1.hp = 50 
# h2.hp is still 100! They are separate.
```

### Your Goal
1. Define `Enemy` with `hp=10`.
2. Create `e1` and `e2`.
3. Damage `e1` (set hp to 0).
4. Print both HPs. `e2` should still be alive.

### Practical Use
In a game with 100 zombies, damaging one logic shouldn't hurt the others.
