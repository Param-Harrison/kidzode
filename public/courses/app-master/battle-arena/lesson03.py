# 🏗️ APP MASTER: CASE 006
# Goal: PvP Interaction

class Boxer:
    def __init__(self, name):
        self.name = name
        self.hp = 10
    
    def get_hit(self):
        self.hp -= 1
        print(self.name, "got hit!")

    def punch(self, other_boxer):
        print(self.name, "swings!")
        other_boxer.get_hit()

b1 = Boxer("Rocky")
b2 = Boxer("Apollo")

b1.punch(b2)
print("Apollo HP:", b2.hp)
