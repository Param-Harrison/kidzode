### One way to solve it:

```python
class Car:
    def __init__(self, s):
        self.s = s
        self.p = 0
    def drive(self):
        self.p += self.s

c1 = Car(10)
c1.drive()
print(c1.p)
```
