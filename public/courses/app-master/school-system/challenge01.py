# ---- YOUR CHALLENGE ----
class Person:
    def __init__(self, n): self.name = n

class Team:
    def __init__(self):
        self.members = []
    
    def join(self, p):
        self.members.append(p)

    def is_member(self, name):
        # 1. Loop through members
        # 2. If existing name matches, return True
        return False

t = Team()
t.join(Person("A"))

print("Is A here?", t.is_member("A"))

# Write your code below!
