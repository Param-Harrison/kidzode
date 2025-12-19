# 🏗️ APP MASTER: CASE 006
# Goal: Damage Logic

class Wall:
    def __init__(self):
        self.integrity = 100
    
    def smash(self):
        self.integrity -= 50
        print("CRASH!")

w = Wall()
w.smash()
print("Wall HP:", w.integrity)
