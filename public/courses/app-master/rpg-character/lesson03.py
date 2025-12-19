# 🏗️ APP MASTER: CASE 002
# Goal: Pretty Print

class Item:
    def __init__(self, name):
        self.name = name
    
    # 1. Add __str__ method
    def __str__(self):
        return "Item: " + self.name

sword = Item("Excalibur")

# 2. Print the object directly
print(sword)
