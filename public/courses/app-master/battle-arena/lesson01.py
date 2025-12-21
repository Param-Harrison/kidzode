# Project: Battle Arena
# Goal: Fighter Class

class Warrior:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

p1 = Warrior("Thor", 200)
p2 = Warrior("Hulk", 400)

print(p1.name, "vs", p2.name)
