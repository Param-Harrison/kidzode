# Solution

```python
class Item:
    def __init__(self, name): self.name = name

class Monster:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

class Room:
    def __init__(self, name, desc):
        self.name = name
        self.desc = desc
        self.exits = {}
        self.items = []
        self.monster = None

    def connect(self, d, r): self.exits[d] = r

# Setup
entry = Room("Entry", "Dark entry.")
armory = Room("Armory", "Weapons here.")
armory.items.append(Item("Sword"))

hall = Room("Hall", "A skeleton stands here.")
hall.monster = Monster("Skeleton", 20)

throne = Room("Throne", "Gold everywhere!")
throne.items.append(Item("Treasure"))

entry.connect("north", hall)
entry.connect("east", armory)
armory.connect("west", entry)
hall.connect("south", entry)
hall.connect("north", throne)

current = entry
inventory = []

while True:
    print(f"\n--- {current.name} ---")
    print(current.desc)
    if current.monster: print(f"Monster: {current.monster.name} ({current.monster.hp} HP)")
    
    cmd = input("> ").lower().split()
    if not cmd: continue
    
    verb = cmd[0]
    
    if verb == "go":
        if current.monster and current.monster.hp > 0:
            print("Monster blocks you!")
            continue
        dir = cmd[1]
        if dir in current.exits: current = current.exits[dir]
    
    elif verb == "attack":
        if current.monster:
            dmg = 10 if "Sword" in [i.name for i in inventory] else 2
            current.monster.hp -= dmg
            print(f"Hit for {dmg}!")
            if current.monster.hp <= 0: print("Monster died!")
    
    elif verb == "take":
        # Simplified take logic...
        if current.items: inventory.append(current.items.pop(0))
    
    # Win Check
    if "Treasure" in [i.name for i in inventory]:
        print("YOU WIN!")
        break
```
