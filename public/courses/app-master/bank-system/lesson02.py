# 🏗️ APP MASTER: CASE 004
# Goal: Safe Withdraw

class PiggyBank:
    def __init__(self):
        self.coins = 10
    
    def take(self, num):
        # 1. Check if we have enough
        if self.coins >= num:
            self.coins -= num
            print("Took", num)
        else:
            print("Not enough coins!")

p = PiggyBank()
p.take(5)  # Should work
p.take(50) # Should fail
