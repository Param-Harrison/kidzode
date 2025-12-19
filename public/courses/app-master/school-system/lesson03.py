# 🏗️ APP MASTER: CASE 007
# Goal: Loop Nested Objects

class Cat:
    def __init__(self, n): self.name = n

class House:
    def __init__(self):
        self.pets = [Cat("Kitty"), Cat("Luna")]
    
    def call_pets(self):
        # 1. Loop through self.pets
        for p in self.pets:
            # 2. Access property of inner object
            print("Here", p.name)

h = House()
h.call_pets()
