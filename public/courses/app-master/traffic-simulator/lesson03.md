# The System Loop 🏙️

The City updates everything every second.
Light checks color. Car checks Light.

### The Logic
```python
light = Light()
car = Car()

for i in range(5):
    if light.color == "Green":
        car.drive()
    light.change()
```

### Your Goal
1. Define `Light` (starts Green) and `Car` (pos 0).
2. Loop 3 times.
3. Check `if light.color == "Green": car.drive()`.
4. `else: print("Stop")`.
5. Print car position each time.

### Achievement
🏙️ **Mayor**: You built a functioning city!
