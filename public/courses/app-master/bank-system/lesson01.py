# 🏗️ APP MASTER: CASE 004
# Goal: Deposit Money

class Wallet:
    def __init__(self):
        self.cash = 0
    
    # 1. Add deposit method
    def add_money(self, dollars):
        self.cash += dollars
        print("Added $", dollars)

w = Wallet()

# 2. Add cash
w.add_money(50)
print("Total:", w.cash)
