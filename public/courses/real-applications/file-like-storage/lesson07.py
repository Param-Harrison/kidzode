class Directory:
    def __init__(self, name):
        self.name = name
        self.children = [] # Renamed from files to children
    
    def add(self, item):
        self.children.append(item)
    
    def ls(self):
        print(f"--- {self.name} ---")
        for item in self.children:
            print(f"- {item.name}")

root = Directory("root")
docs = Directory("docs")

root.add(docs)
root.ls()
