### Solution

```python
class Pet:
    hunger = 50
    
    def eat(self):
        print("Yum!")
        self.hunger -= 10

p = Pet()
print("Hunger:", p.hunger)
p.eat()
print("Hunger:", p.hunger)
```
