### Solution

```python
class Car:
    def __init__(self, speed):
        self.speed = speed
        self.x = 0
    
    def move(self):
        self.x += self.speed

fast = Car(20)
slow = Car(5)

fast.move()
slow.move()

print("Fast Pos:", fast.x)
print("Slow Pos:", slow.x)
```
