### One way to solve it:

```python
class Hero:
    def __init__(self):
        self.lvl = 1
    
    def train(self):
        self.lvl += 1
        print("Level Up!", self.lvl)

h = Hero()
h.train()
```
