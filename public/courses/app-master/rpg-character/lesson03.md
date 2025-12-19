# The String Method 📜

When we `print(object)`, Python shows ugly gobbledygook.
We can fix this with `__str__`.
It must return a string.

### The Magic Method
```python
def __str__(self):
    return "I am " + self.name
```

### Your Goal
1. Define `class Hero` with `self.name`.
2. Add `def __str__(self):`.
3. Return `self.name + " the Hero"`.
4. Create hero and `print(hero)`.

### Achievement
📜 **Bio Writer**: You gave your objects a readable ID!
