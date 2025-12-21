# Project: Bank System
# Goal: Returning Data

class Bank:
    def calculate_interest(self, balance):
        return balance * 0.1

my_bank = Bank()
interest = my_bank.calculate_interest(1000)

print("Interest Earned:", interest)
