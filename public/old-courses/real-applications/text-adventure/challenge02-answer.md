# Solution

```python
class Item:
    def __init__(self, name):
        self.name = name

class Room:
    def __init__(self, name):
        self.name = name
        self.exits = {}
        self.items = []
    
    def connect(self, dir, room):
        self.exits[dir] = room

# Setup
start = Room("Start")
hall = Room("Hall")
hall.items.append(Item("Key"))
vault = Room("Vault")

start.connect("north", hall)
hall.connect("south", start)
hall.connect("east", vault)

current = start
inventory = []

while True:
    print(f"You are in {current.name}")
    cmd = input("> ")
    
    if cmd.startswith("go "):
        dir = cmd.split()[1]
        if dir in current.exits:
            next_r = current.exits[dir]
            if next_r.name == "Vault" and "Key" not in [i.name for i in inventory]:
                print("Locked!")
            else:
                current = next_r
                
    elif cmd == "get key":
        if current.items:
            inventory.append(current.items.pop(0))
            print("Got Key!")
```
