### Solution

```python
class Car:
    speed = 10
    def stop(self):
        self.speed = 0

class Light:
    color = "Red"

c = Car()
l = Light()

if l.color == "Red":
    c.stop()

print("Car Speed:", c.speed)
```
