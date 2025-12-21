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
1. `class TrafficSignal` with `active_time`.
2. `class City` with `signals = []`.
3. `tick()` loops through signals and calls `update()`.
4. Create city, add 2 signals, run `city.tick()`.

### Practical Use
Physics engines run a `tick()` function that updates gravity and collisions for thousands of objects at once.
