### One way to solve it:

```python
def attack(self, enemy):
    if random.randint(1, 10) > 8:
        print("CRIT!")
        enemy.hit(20)
    else:
        enemy.hit(10)
```
