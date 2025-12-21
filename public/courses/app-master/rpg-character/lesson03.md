# The String Method 📜

Printing an object usually looks ugly: `<__main__.Hero object at 0x102...>`.
We can fix this with `__str__`.

### The Code
```python
class Skill:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return "Skill: " + self.name

s = Skill("Fireball")
print(s) # Prints "Skill: Fireball"
```

### Your Goal
1. Define `Item` with `__init__(self, name)`.
2. Add `__str__` returning "Item: [name]".
3. Create `i = Item("Sword")`.
4. Print `i`.

### Practical Use
Debugging! It helps you see what an object is without checking every variable manually.
