# Actions (Methods) 🏃

Methods are functions inside a class.
They let objects DO things.
Crucial: Methods must take `self` as the first argument.

### The Code
```python
class Bird:
    def fly(self):
        print("Flap flap!")

pidgey = Bird()
pidgey.fly()
```

### Your Goal
1. Define `Duck`.
2. Add method `quack(self)`.
3. Inside, print "Quack!".
4. Create `d = Duck()`.
5. Call `d.quack()`.

### Practical Use
`player.jump()` or `enemy.attack()` are methods defining what game characters can do.
