### Solution

```python
class Ghost:
    def __init__(self, name):
        self.name = name
        print("Spawned:", self.name)

for i in range(5):
    n = "Ghost " + str(i)
    Ghost(n)
```
