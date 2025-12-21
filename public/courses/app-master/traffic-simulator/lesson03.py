# Project: Traffic Sim
# Goal: The Simulation Loop

class Raindrop:
    y = 100
    def fall(self):
        self.y -= 10

drops = [Raindrop(), Raindrop()]

# Simulation Step
print("Rain falling...")
for d in drops:
    d.fall()

print("Drop 1 Height:", drops[0].y)
