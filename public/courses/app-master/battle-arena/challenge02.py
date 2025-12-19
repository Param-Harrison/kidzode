# ---- YOUR CHALLENGE ----
import random

class Fighter:
    def __init__(self, n):
        self.name = n
        self.hp = 100
    
    def hit(self, dmg):
        self.hp -= dmg
    
    def attack(self, target):
        # 1. Roll dice
        # 2. Decide damage (10 or 20)
        # 3. Apply to target
        pass

f1 = Fighter("A")
f2 = Fighter("B")

f1.attack(f2)
print("B HP:", f2.hp)

# Write your code below!
