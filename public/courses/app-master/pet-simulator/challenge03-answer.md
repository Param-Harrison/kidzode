### Solution

```python
class Pet:
    fun = 0
    energy = 100
    
    def play(self):
        self.fun += 20
        self.energy -= 10
        print("Wheee!")

p = Pet()
p.play()
p.play()
p.play()

print("Fun:", p.fun)
print("Energy:", p.energy)
```
