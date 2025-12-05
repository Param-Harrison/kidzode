class Game:
    def __init__(self):
        self.reset()

    def reset(self):
        self.score = 0
        self.level = 1
        print("Game Reset!")

g = Game()
g.score = 500
print(f"Score: {g.score}")

g.reset()
print(f"Score: {g.score}")
