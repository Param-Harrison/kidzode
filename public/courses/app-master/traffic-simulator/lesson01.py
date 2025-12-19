# 🏗️ APP MASTER: CASE 008
# Goal: State Changes

class Switch:
    def __init__(self):
        self.is_on = False
    
    def toggle(self):
        if self.is_on:
            self.is_on = False
            print("OFF")
        else:
            self.is_on = True
            print("ON")

s = Switch()
s.toggle()
s.toggle()
