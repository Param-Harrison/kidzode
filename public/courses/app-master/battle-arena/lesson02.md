# Taking Damage 💔

Objects need a way to GET hurt.
Define `take_damage(self, amount)`.
Encapsulate the math!

### The Code
```python
def take_damage(self, amount):
    self.hp -= amount
    print(self.name, "took", amount, "damage!")
```

### Your Goal
1. `class Tank` with `hp=50`.
2. `hit(amount)` subtracts hp.
3. Create Tank. Call hit(10). Call hit(20).
4. Print final hp (20).

### Practical Use
Why use a method? So we can add logic like "Defense" or "Immunity" later without breaking the rest of the game.
