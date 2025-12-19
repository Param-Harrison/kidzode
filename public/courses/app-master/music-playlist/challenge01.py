# ---- YOUR CHALLENGE ----
class Clip:
    def __init__(self, time):
        self.time = time

class Movie:
    def __init__(self):
        self.clips = []
    
    def add(self, c):
        self.clips.append(c)

    def total_time(self):
        # 1. Loop and sum time
        # 2. Return sum
        return 0

m = Movie()
m.add(Clip(10))
m.add(Clip(20))

print("Total Length:", m.total_time())

# Write your code below!
