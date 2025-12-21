# Project: Monster Spawner
# Goal: Randomness

import random

class Wolf:
    def __init__(self):
        self.damage = random.randint(5, 20)
        print("Wolf created with damage:", self.damage)

for i in range(3):
    Wolf()
