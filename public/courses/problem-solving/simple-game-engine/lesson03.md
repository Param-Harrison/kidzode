# More Properties

Robots have color, battery, and more!

```python
class Robot:
    def __init__(self, name, color):
        self.name = name
        self.color = color
        self.battery = 100 # Default value

my_bot = Robot("Wall-E", "Yellow")

print(f"I am {my_bot.name}.")
print(f"I am {my_bot.color}.")
print(f"Battery: {my_bot.battery}%")
```

You'll see:
```
I am Wall-E.
I am Yellow.
Battery: 100%
```

We can store lots of data in one object!

## Try This!
Add a `speed` property to your robot!
