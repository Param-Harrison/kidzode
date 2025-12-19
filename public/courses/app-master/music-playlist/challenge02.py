# ---- YOUR CHALLENGE ----
class Song:
    def __init__(self, t):
        self.title = t
    def __repr__(self): return self.title

class Radio:
    def __init__(self):
        self.list = []
    
    def add(self, t):
        self.list.append(Song(t))

    def delete(self, target_title):
        # 1. Find song with matching title
        # 2. Remove it from self.list
        pass

r = Radio()
r.add("Hit 1")
r.add("Bad Song")

# 3. Delete Bad Song
# 4. Print list

# Write your code below!
