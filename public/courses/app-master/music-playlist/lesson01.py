# 🏗️ APP MASTER: CASE 005
# Goal: Define Song Data

class Track:
    # 1. Setup Init
    def __init__(self, name, seconds):
        self.name = name
        self.len = seconds

# 2. Create one track
t = Track("Beep Boop", 120)

print("Now Playing:", t.name)
