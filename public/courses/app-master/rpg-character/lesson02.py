# Project: RPG Creator
# Goal: Initialization

class Player:
    def __init__(self, username, team):
        print("New player joined:", username)
        self.username = username
        self.team = team

p1 = Player("NoobMaster", "Red")
p2 = Player("ProGamer", "Blue")

print(p1.team)
