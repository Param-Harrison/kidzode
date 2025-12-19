class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def take_damage(self, damage):
        self.health = self.health - damage
        print(f"{self.name} took {damage} damage!")

p1 = Player("Mario")
p1.take_damage(20)
print(f"Health: {p1.health}")
