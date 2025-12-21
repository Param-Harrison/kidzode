### Solution

```python
class Pet:
    energy = 80
    
    def sleep(self):
        self.energy += 50
        if self.energy > 100:
            self.energy = 100

p = Pet()
p.sleep()
print("Energy:", p.energy)
```
