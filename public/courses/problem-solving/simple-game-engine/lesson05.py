class Robot:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"Hello! I am {self.name}.")

bot = Robot("Wall-E")
bot.say_hello()
