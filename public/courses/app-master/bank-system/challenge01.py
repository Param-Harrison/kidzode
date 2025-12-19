# ---- YOUR CHALLENGE ----
class Bank:
    def __init__(self, start):
        self.money = start
    
    def get(self, amt):
        self.money -= amt
    
    def put(self, amt):
        self.money += amt

bob = Bank(100)
alice = Bank(0)

print("Before:", bob.money, alice.money)

# 1. Take 50 from Bob
# 2. Give 50 to Alice

print("After:", bob.money, alice.money)

# Write your code below!
