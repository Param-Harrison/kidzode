### Solution

```python
class Fighter:
    def __init__(self, power):
        self.power = power

f1 = Fighter(10)
f2 = Fighter(8)

if f1.power > f2.power:
    print("F1 Wins")
else:
    print("F2 Wins")
```
