# The System Loop 🌍

The "World" controls time.
It has a list of objects.
It calls `update()` on every object, every tick.

### The Code
```python
class World:
    cars = []
    
    def tick(self):
        for c in self.cars:
            c.move()
```

### Your Goal
1. `class Clock` with `time`.
2. `class World` with `clocks = []`.
3. `tick()` loops through clocks and calls `tick()`.
4. Create world, add 2 clocks, run `world.tick()`.

### Practical Use
Physics engines run a `tick()` function that updates gravity and collisions for thousands of objects at once.
