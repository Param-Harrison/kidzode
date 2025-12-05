# Refactoring to OOP 🏗️

Dictionaries are messy. Objects are clean!
Let's make a `Room` class.

```python
class Room:
    def __init__(self, name, desc):
        self.name = name
        self.desc = desc
        self.exits = {} # Connects to other Room objects

    def connect(self, direction, other_room):
        self.exits[direction] = other_room

start = Room("Start", "The beginning.")
end = Room("End", "The finish line.")

start.connect("north", end)
```

Now we reference **Objects** directly, not strings!

## Try This!
Create `Room` class and connect Hall to Kitchen.
