class Monster:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

m = Monster("Goblin", 10)

print(f"A wild {m.name} appears with {m.hp} HP!")

while m.hp > 0:
    input("Press Enter to Attack!")
    m.hp -= 5
    print(f"You hit it! HP: {m.hp}")

print("Victory!")
