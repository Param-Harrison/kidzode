### One way to solve it:

```python
for r in nest:
    r.hp -= 10
    if r.hp <= 0:
        print("Rat defeated!")
```
