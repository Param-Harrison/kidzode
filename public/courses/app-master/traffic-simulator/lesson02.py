# Project: Traffic Sim
# Goal: Coordinates

class Player:
    x = 0
    y = 0
    
    def walk(self):
        self.x += 1
        print("Position:", self.x, self.y)

p = Player()
p.walk()
p.walk()
