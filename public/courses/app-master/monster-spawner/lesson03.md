# Managing the Horde 📋

Spawning them is easy. Keeping track is harder.
We need a LIST of objects.
`enemies = []`.

### The Code
```python
army = []
for i in range(10):
    s = Soldier()
    army.append(s)

print("Army Size:", len(army))
```

### Your Goal
1. Create empty list `swarm`.
2. Define `Bee`.
3. Loop 5 times: create Bee, append to `swarm`.
4. Print length of `swarm`.

### Practical Use
The game engine maintains a "Scene Graph" which is just a giant list of all active objects.
