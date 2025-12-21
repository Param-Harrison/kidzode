# Project: Bank System
# Goal: Deposit

class Wallet:
    cash = 0
    
    def gain(self, amount):
        print("You got paid $", amount)
        self.cash += amount

my_wallet = Wallet()
my_wallet.gain(100)
my_wallet.gain(50)

print("Total Cash:", my_wallet.cash)
