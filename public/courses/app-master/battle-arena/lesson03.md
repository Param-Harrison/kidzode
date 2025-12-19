# Interaction Logic 🥊

Now one object calls a method ON another object.
`attacker.attack(victim)`

### The Logic
```python
def attack(self, target):
    target.take_damage(10)
```

### Your Goal
1. Define `Fighter` with `take_damage(amount)`.
2. Add `punch(self, enemy)`.
3. `punch` should call `enemy.take_damage(5)`.
4. Create 2 fighters. Make P1 punch P2.

### Achievement
🥊 **Sparring Partner**: You connected two objects!
