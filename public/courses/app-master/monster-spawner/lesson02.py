# 🏗️ APP MASTER: CASE 003
# Goal: Random Stats
import random

class Wolf:
    def __init__(self):
        # 1. Random strength
        self.strength = random.randint(1, 10)

# 2. Spawn and check
w1 = Wolf()
print("Wolf Strength:", w1.strength)
