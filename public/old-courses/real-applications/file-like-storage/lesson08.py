class File:
    def __init__(self, name, content):
        self.name = name
        self.content = content

class Directory:
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def add(self, item):
        self.children.append(item)

    def find(self, target_name):
        for item in self.children:
            if item.name == target_name:
                return item
        return None

root = Directory("root")
f = File("secret.txt", "1234")
root.add(f)

found = root.find("secret.txt")
if found:
    print("Found it!")
else:
    print("404 Not Found")
