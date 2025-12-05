class Robot:
    def __init__(self, name):
        self.name = name
        self.battery = 100

bot = Robot("Bender")
print(f"Battery: {bot.battery}")

# Use energy!
bot.battery = 50
print(f"Battery: {bot.battery}")
