# Taking Damage 💔

Fighters handle their own damage.
This encapsulates logic nicely!

### The Logic
```python
def take_damage(self, amount):
    self.hp -= amount
    print(self.name, "ouch!")
```

### Your Goal
1. Define `Fighter` with `hp=100`.
2. Add `hit(self)` method.
3. It subtracts 10 from HP.
4. Create `f = Fighter("SubZero")`.
5. Call `f.hit()` and print HP.

### Achievement
💔 **Tank**: You handled incoming attacks!
