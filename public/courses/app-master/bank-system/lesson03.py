# Project: Bank System
# Goal: Returning Data

class Calculator:
    def add_tax(self, price):
        return price + (price * 0.2)

calc = Calculator()
final_price = calc.add_tax(100)

print("Final Price:", final_price)
