# Welcome to Monster Spawner! 👾
A wave of danger is approaching! Let's learn how game engines create hundreds of enemies in the blink of an eye to challenge any player!

## The Spawner Loop 🔄

Creating 100 enemies one by one is boring.
Use a loop!
`for i in range(100):`

### The Code
```python
class Enemy:
    def __init__(self):
        print("Enemy Spawned!")

for i in range(3):
    Enemy()
```

### Your Goal
1. Define class `Zombie`.
2. `__init__` should print "Braaaains...".
3. Use a loop to spawn 5 zombies.

### Practical Use
Level Designers place "Spawner" blocks where enemies pop out automatically.
