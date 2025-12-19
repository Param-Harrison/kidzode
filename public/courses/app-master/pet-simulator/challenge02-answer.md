### One way to solve it:

```python
class Pet:
    def __init__(self):
        self.energy = 10
    
    def play(self):
        self.energy -= 5
        print("Energy:", self.energy)

p = Pet()
p.play()
p.play()
```
