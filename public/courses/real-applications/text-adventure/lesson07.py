class Item:
    def __init__(self, name):
        self.name = name

class Room:
    def __init__(self, name):
        self.items = []
    
    def add_item(self, item):
        self.items.append(item)
    
    def show_items(self):
        for i in self.items:
            print(f"You see a {i.name} here.")

r = Room("Store")
r.add_item(Item("Apple"))
r.show_items()
