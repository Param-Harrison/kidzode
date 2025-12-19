# The Spawner Loop 👻

In games, we don't write `e1 = Enemy()`, `e2 = Enemy()`...
We use a **Loop** to spawn them!

### The Logic
```python
horde = []
for i in range(10):
    horde.append(Ghost())
```

### Your Goal
1. Define `class Zombie` with `self.hp = 10`.
2. Create empty `zombies` list.
3. Loop 5 times.
4. Append new `Zombie()` to list.
5. Print "Spawned:", len(zombies).

### Achievement
👻 **Necromancer**: You raised an army!
