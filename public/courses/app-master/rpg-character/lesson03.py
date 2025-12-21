# Project: RPG Creator
# Goal: Pretty Printing

class Badge:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return "[" + self.title + "]"

b = Badge("Officer")
print(b)
