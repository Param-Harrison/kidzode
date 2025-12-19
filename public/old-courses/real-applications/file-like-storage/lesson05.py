class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name):
        self.name = name
        self.files = []
    
    def add_file(self, file_obj):
        self.files.append(file_obj)
        print(f"Added {file_obj.name} to {self.name}")

root = Directory("root")
f1 = File("img.png")

root.add_file(f1)
