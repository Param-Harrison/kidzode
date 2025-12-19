# ---- YOUR CHALLENGE ----
class Warrior:
    def __init__(self, n):
        self.name = n
        self.hp = 20
    def attack(self, other):
        other.hp -= 5
        print(self.name, "hits!")

w1 = Warrior("X")
w2 = Warrior("Y")

# 1. Loop while both alive
# 2. Exchange hits
# 3. Print winner

# Write your code below!
