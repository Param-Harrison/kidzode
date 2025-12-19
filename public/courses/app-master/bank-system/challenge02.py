# ---- YOUR CHALLENGE ----
class Card:
    def __init__(self):
        self.limit = 10
    
    def swipe(self, price):
        # 1. Check if price <= limit
        # 2. If yes, subtract and return True
        # 3. Else, return False
        return False

my_card = Card()

# 4. Try to swipe 100
if my_card.swipe(100):
    print("Approved")
else:
    print("Declined")

# Write your code below!
