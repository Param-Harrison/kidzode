# Add Properties

Robots need names!
We use a special function `__init__` to set up our object.

```python
class Robot:
    def __init__(self, name):
        self.name = name

bot1 = Robot("R2D2")
bot2 = Robot("C3PO")

print(bot1.name)
print(bot2.name)
```

You'll see:
```
R2D2
C3PO
```

`self.name` means "MY name". Each robot has its own!

## Try This!
Create a `Cat` class with a `name` property!
