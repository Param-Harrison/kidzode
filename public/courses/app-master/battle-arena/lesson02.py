# Project: Battle Arena
# Goal: Damage Logic

class Robot:
    hp = 100
    
    def damage(self, amt):
        self.hp -= amt
        if self.hp < 0:
            self.hp = 0

r = Robot()
r.damage(150) # Should stop at 0
print("HP:", r.hp)
