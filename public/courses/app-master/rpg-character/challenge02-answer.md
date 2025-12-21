### Solution

```python
class Role:
    def __init__(self, name):
        self.name = name
        self.level = 1
    
    def levelup(self):
        self.level += 1

r = Role("Sniper")
r.levelup()
r.levelup()
r.levelup()

print("Final Level:", r.level)
```
