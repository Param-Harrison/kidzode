# Shiny Objects ✨

Games need Stuff.
Let's make an `Item` class and put them in rooms.

```python
class Item:
    def __init__(self, name, desc):
        self.name = name
        self.desc = desc

class Room:
    def __init__(self, name):
        self.items = [] # Inventory of the room
    
    def add_item(self, item):
        self.items.append(item)

sword = Item("Sword", "Sharp and shiny.")
cave = Room("Cave")
cave.add_item(sword)
```

Now the room has loot! 💰

## Try This!
Display the items when you print the room description.
