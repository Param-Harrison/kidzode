### One way to solve it:

```python
def total(self):
    t = 0
    for r in self.rooms:
        t += r.count
    return t
```
