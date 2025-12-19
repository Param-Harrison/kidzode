# This builds on Lesson 8 code
class Directory:
    def __init__(self, name):
        self.children = []

    def find(self, name): 
        # ... logic ...
        pass

    def delete(self, name):
        item = self.find(name)
        if item:
            self.children.remove(item)
            print(f"Deleted {name}")
        else:
            print("File not found!")
