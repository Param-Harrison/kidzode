# Project: Battle Arena
# Goal: Interaction

class Boxer:
    def __init__(self, name, power):
        self.name = name
        self.power = power
        self.hp = 50
    
    def punch(self, target):
        target.hp -= self.power

b1 = Boxer("Rocky", 10)
b2 = Boxer("Ivan", 15)

b1.punch(b2)
print("Ivan HP:", b2.hp)
