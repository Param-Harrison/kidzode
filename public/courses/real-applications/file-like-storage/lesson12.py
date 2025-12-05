class Directory:
    def __init__(self, name, parent=None):
        self.name = name
        self.children = []
        self.parent = parent # New idea!
    
    def add(self, item):
        item.parent = self # Link back!
        self.children.append(item)

root = Directory("root")
home = Directory("home")
root.add(home)

print(f"Home's parent is: {home.parent.name}")
