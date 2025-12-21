### Solution

```python
class Hero:
    def __init__(self, name, level):
        self.name = name
        self.level = level

h1 = Hero("Knight", 10)
h2 = Hero("Mage", 5)

print(h1.name, "is Level", h1.level)
print(h2.name, "is Level", h2.level)
```
