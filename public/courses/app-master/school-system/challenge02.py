# ---- YOUR CHALLENGE ----
class User:
    def __init__(self, n): self.name = n
    def __repr__(self): return self.name

class DB:
    def __init__(self): self.users = [User("OldName")]

    def get_user(self, target):
        # 1. Loop and find matching user
        # 2. Return the OBJECT
        return None

db = DB()
u = db.get_user("OldName")

if u:
    u.name = "NewName"
    print("Updated:", db.users)

# Write your code below!
