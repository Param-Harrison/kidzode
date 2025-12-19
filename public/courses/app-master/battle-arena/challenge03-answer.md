### One way to solve it:

```python
while w1.hp > 0 and w2.hp > 0:
    w1.attack(w2)
    if w2.hp > 0:
        w2.attack(w1)

print("Game Over")
```
