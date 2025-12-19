# 🏗️ APP MASTER: CASE 001
# Goal: The Constructor

class Robot:
    # 1. Setup function (Double underscore!)
    def __init__(self, model_name):
        self.model = model_name
        self.power = 100

# 2. Create instance
bot = Robot("RX-78")

print("System Online:", bot.model)
print("Power Level:", bot.power)
