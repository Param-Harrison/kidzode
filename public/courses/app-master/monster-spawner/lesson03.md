# Managing the Horde 📋

Spawning them is easy. Keeping track is harder.
We need a LIST of objects.
`enemies = []`.

### The Code
```python
mobs = []
for i in range(10):
    g = Ghost()
    mobs.append(g)

print("Horde Size:", len(mobs))
```

### Your Goal
1. Create empty list `monsters`.
2. Define `Slime`.
3. Loop 5 times: create Slime, append to `monsters`.
4. Print length of `monsters`.

### Practical Use
The game engine maintains a "Scene Graph" which is just a giant list of all active objects.
