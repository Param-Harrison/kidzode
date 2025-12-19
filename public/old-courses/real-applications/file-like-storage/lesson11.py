class Directory:
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def add(self, item):
        self.children.append(item)

    def find(self, name):
        for item in self.children:
            if item.name == name:
                return item
        return None

class System:
    def __init__(self, root):
        self.root = root
        self.current = root
    
    def pwd(self):
        print(f"You are in: {self.current.name}")

    def cd(self, dir_name):
        found = self.current.find(dir_name)
        if found:
            self.current = found
            print(f"Moved to {dir_name}")
        else:
            print("Directory not found")

root = Directory("root")
home = Directory("home")
root.add(home)

sys = System(root)
sys.pwd()
sys.cd("home")
sys.pwd()
