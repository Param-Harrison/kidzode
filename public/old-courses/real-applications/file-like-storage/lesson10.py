class File:
    def __init__(self, name, content):
        self.name = name
        self.content = content
        self.size = len(content) # Calculated!

class Directory:
    def __init__(self, name):
        self.children = []

    def add(self, item):
        self.children.append(item)

    def get_size(self):
        total = 0
        for item in self.children:
            total += item.size
        return total

d = Directory("Test")
d.add(File("a.txt", "abc")) # 3 bytes
d.add(File("b.txt", "de"))  # 2 bytes

print(f"Total size: {d.get_size()}") # 5
