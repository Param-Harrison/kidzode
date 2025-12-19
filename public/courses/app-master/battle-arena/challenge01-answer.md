### One way to solve it:

```python
def heal(self):
    self.hp += 20
    if self.hp > 100:
        self.hp = 100
```
