# Moving Objects 🚗

Simulation requires **Coordinate Systems**.
We track `x` and `y` positions.
`move()` adds speed to `x`.

### The Code
```python
class Car:
    def __init__(self):
        self.x = 0
        self.speed = 5
    
    def move(self):
        self.x += self.speed
```

### Your Goal
1. Define `Rocket` with `y = 0`.
2. Add `fly()` method: `y` increases by 10.
3. Call fly twice.
4. Print `Rocket height: [y]`.

### Practical Use
Every object on your screen has an (x, y) position that updates 60 times a second.
