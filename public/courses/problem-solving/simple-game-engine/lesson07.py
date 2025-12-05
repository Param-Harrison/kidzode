class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def show_stats(self):
        print(f"{self.name}: {self.health} HP")

p1 = Player("Mario")
p1.show_stats()
