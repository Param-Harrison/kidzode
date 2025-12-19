# ---- YOUR CHALLENGE ----
class Room:
    def __init__(self, c): self.count = c

class School:
    def __init__(self):
        self.rooms = [Room(10), Room(5)]
    
    def total(self):
        # 1. Loop through rooms
        # 2. Add room.count to total
        return 0

s = School()
print("Total Capacity:", s.total())

# Write your code below!
