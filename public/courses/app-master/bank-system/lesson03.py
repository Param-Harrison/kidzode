# 🏗️ APP MASTER: CASE 004
# Goal: Return Status

class TicketMachine:
    def __init__(self):
        self.tickets = 5
    
    def buy(self):
        if self.tickets > 0:
            self.tickets -= 1
            return True
        else:
            return False

tm = TicketMachine()

# 1. Capture the return value
is_success = tm.buy()

print("Did I get a ticket?", is_success)
