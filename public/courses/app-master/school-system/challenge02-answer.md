### One way to solve it:

```python
def get_user(self, target):
    for u in self.users:
        if u.name == target:
            return u
    return None
```
