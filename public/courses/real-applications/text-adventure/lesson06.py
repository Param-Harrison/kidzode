class Room:
    def __init__(self, name, desc):
        self.name = name
        self.desc = desc
        self.exits = {}

    def connect(self, direction, other_room):
        self.exits[direction] = other_room

r1 = Room("Hall", "Main Hall")
r2 = Room("Kitchen", "Cooking place")

r1.connect("north", r2)
r2.connect("south", r1)

print(f"Hall connects to: {r1.exits['north'].name}")
