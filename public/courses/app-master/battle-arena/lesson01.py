# 🏗️ APP MASTER: CASE 006
# Goal: Setup Fighters

class Player:
    def __init__(self, tag):
        self.tag = tag
        self.score = 0

# 1. Create players
p1 = Player("NoobMaster")
p2 = Player("ProGamer")

print(p1.tag, "VS", p2.tag)
