### Solution

```python
class Car:
    def __init__(self, x):
        self.x = x

c1 = Car(50)
c2 = Car(50)

if c1.x == c2.x:
    print("CRASH!")
else:
    print("Safe.")
```
