# 🏗️ APP MASTER: CASE 002
# Goal: Unique Stats

class Char:
    def __init__(self, name, strength):
        self.name = name
        self.str = strength

# 1. Create a weak character
c1 = Char("Goblin", 5)

# 2. Create a strong character
c2 = Char("Dragon", 9000)

print(c1.name, "Strength:", c1.str)
print(c2.name, "Strength:", c2.str)
