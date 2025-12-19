### One way to solve it:

```python
def delete(self, target):
    for s in self.list:
        if s.title == target:
            self.list.remove(s)
            break
```
