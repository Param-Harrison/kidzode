# Add Methods

Robots can do things!
Functions inside a class are called **Methods**.

```python
class Robot:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"Hello! I am {self.name}.")

bot = Robot("Wall-E")
bot.say_hello()
```

You'll see:
```
Hello! I am Wall-E.
```

Notice `self`? It lets the method access the robot's name!

## Try This!
Add a method `say_goodbye()`!
