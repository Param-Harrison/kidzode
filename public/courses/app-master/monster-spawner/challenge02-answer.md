### Solution

```python
import random

class Beast:
    def __init__(self):
        self.power = random.randint(1, 100)

cage = []
for i in range(10):
    cage.append(Beast())

highest = 0
for b in cage:
    if b.power > highest:
        highest = b.power

print("Strongest Beast:", highest)
```
