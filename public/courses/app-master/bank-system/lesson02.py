# Project: Bank System
# Goal: Withdraw

class Safe:
    gold = 100
    
    def steal(self, amount):
        if amount > self.gold:
            print("Safe is empty!")
        else:
            self.gold -= amount
            print("Stole", amount, "gold")

s = Safe()
s.steal(200) # Fail
s.steal(50)  # Works
