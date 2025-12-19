class Player:
    def __init__(self, name):
        self.name = name
        self.health = 50 # Low health!

    def heal(self, amount):
        self.health = self.health + amount
        print(f"{self.name} healed {amount} HP!")

p1 = Player("Link")
print(f"Health: {p1.health}")

p1.heal(30)
print(f"Health: {p1.health}")
