# Actions (Methods) 🏃

Methods are functions inside a class.
They let objects DO things.
Crucial: Methods must take `self` as the first argument.

### The Code
```python
class Cat:
    def meow(self):
        print("Meow meow!")

pidgey = Cat()
pidgey.meow()
```

### Your Goal
1. Define `Kitten`.
2. Add method `purr(self)`.
3. Inside, print "Purrr...".
4. Create `k = Kitten()`.
5. Call `k.purr()`.

### Practical Use
`player.jump()` or `enemy.attack()` are methods defining what game characters can do.
