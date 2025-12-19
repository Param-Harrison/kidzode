### One way to solve it:

```python
def swipe(self, amount):
    if self.bal >= amount:
        self.bal -= amount
        return True
    return False
```
