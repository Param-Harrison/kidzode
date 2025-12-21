# Project: Battle Arena
# Goal: Damage Logic

class Fighter:
    hp = 100
    
    def damage(self, amt):
        self.hp -= amt
        if self.hp < 0:
            self.hp = 0

hero = Fighter()
hero.damage(150) # Should stop at 0
print("Final HP:", hero.hp)
