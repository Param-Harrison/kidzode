### One way to solve it:

```python
def total_time(self):
    t = 0
    for c in self.clips:
        t += c.time
    return t
```
