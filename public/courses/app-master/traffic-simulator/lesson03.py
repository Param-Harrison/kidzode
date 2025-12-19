# 🏗️ APP MASTER: CASE 008
# Goal: System Integration

class Gate:
    def __init__(self): self.open = True

class Sheep:
    def __init__(self): self.loc = 0
    def run(self): self.loc += 1

g = Gate()
s = Sheep()

# Simulation Loop
for time in range(3):
    if g.open:
        s.run()
        print("Sheep moved to", s.loc)
    else:
        print("Gate closed!")
