# Birth (The Init) 🐣

When an object is born, `__init__` runs automatically.
This is where we give it a name and stats!

### The Constructor
`self` points to the specific object being built.

```python
class Cat:
    def __init__(self, name):
        self.name = name
        self.age = 0
```

### Your Goal
1. Define `class Pet`.
2. Create `__init__(self, n)`.
3. Set `self.name = n`.
4. Create `p = Pet("Fluffy")`.
5. Print `p.name`.

### Achievement
🐣 **Creator**: You gave life to your code!
