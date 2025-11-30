# Create a Dog class
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(f"{self.name} says woof!")

# Try it out!
my_dog = Dog("Buddy")
my_dog.bark()
