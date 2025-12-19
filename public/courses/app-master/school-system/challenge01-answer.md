### One way to solve it:

```python
def is_member(self, name):
    for m in self.members:
        if m.name == name:
            return True
    return False
```
