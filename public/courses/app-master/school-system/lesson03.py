# Project: School System
# Goal: Drilling Down

class Engine:
    hp = 500

class Car:
    def __init__(self):
        self.engine = Engine()

my_car = Car()

# Access Engine INSIDE Car
print("Horsepower:", my_car.engine.hp)
