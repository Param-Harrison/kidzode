# Project: Traffic Sim
# Goal: State Machine

class Door:
    is_open = False
    
    def toggle(self):
        if self.is_open:
            self.is_open = False
            print("Closing door.")
        else:
            self.is_open = True
            print("Opening door.")

d = Door()
d.toggle()
d.toggle()
