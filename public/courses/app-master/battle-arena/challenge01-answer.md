### Solution

```python
class Mage:
    hp = 50
    
    def heal(self):
        self.hp += 20
        print("Casting Heal!")

m = Mage()
m.hp -= 30
print("HP:", m.hp)
m.heal()
print("HP:", m.hp)
```
