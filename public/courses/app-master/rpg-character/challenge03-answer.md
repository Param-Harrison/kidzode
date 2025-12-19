### One way to solve it:

```python
class Box:
    def __init__(self, hp): self.hp = hp
    
    def hit(self, other):
        other.hp -= 1

b1 = Box(10)
b2 = Box(10)

b1.hit(b2)
print(b2.hp)
```
