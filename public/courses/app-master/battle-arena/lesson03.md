# Interaction Logic 🥊

Now make them fight!
`attack(self, target)` tells `target` to `take_damage`.
One object calling another object's method.

### The Code
```python
def attack(self, target):
    print(self.name, "attacks", target.name)
    target.take_damage(self.strength)
```

### Your Goal
1. `class Fighter` with name, hp, str.
2. Methods `attack(target)` and `take_damage(amount)`.
3. `f1` (str 10) attacks `f2` (hp 50).
4. Print f2.hp (should be 40).

### Practical Use
The entire internet works this way: Your Browser (Object A) sends a Request to a Server (Object B).
