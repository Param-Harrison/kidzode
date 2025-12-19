# 🏗️ APP MASTER: CASE 008
# Goal: Movement

class Rocket:
    def __init__(self):
        self.height = 0
    
    def fly(self):
        self.height += 100
        print("Altitude:", self.height)

r = Rocket()
r.fly()
r.fly()
