# Access Properties

We can change properties too!

```python
class Robot:
    def __init__(self, name):
        self.name = name
        self.battery = 100

bot = Robot("Bender")
print(f"Battery: {bot.battery}")

# Use energy!
bot.battery = 50
print(f"Battery: {bot.battery}")
```

You'll see:
```
Battery: 100
Battery: 50
```

Objects can change over time!

## Try This!
Change the robot's name to "Flexo"!
