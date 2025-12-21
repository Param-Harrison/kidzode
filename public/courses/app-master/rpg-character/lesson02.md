# Different Stats (The Init) 🧬

Setting variables manually (`p.hp = 10`) is slow.
We want to set them when we CREATE the object.
We use the special `__init__` method.

### The Code
```python
class Hero:
    def __init__(self, name, job):
        self.name = name
        self.job = job

p1 = Hero("Aragon", "Knight")
```

### Your Goal
1. Define `Character` with `__init__(self, name)`.
2. Assign `self.name = name`.
3. Create `c1 = Character("Mario")`.
4. Create `c2 = Character("Luigi")`.
5. Print their names.

### Practical Use
Constructors are used to enforce required data. You can't have a file without a filename.
