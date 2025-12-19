class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def add(self, item):
        self.children.append(item)

def print_tree(directory, indent=0):
    spaces = "  " * indent
    print(f"{spaces}📁 {directory.name}/")
    
    for item in directory.children:
        if isinstance(item, Directory):
            print_tree(item, indent + 1)
        else:
            print(f"{spaces}  📄 {item.name}")

root = Directory("root")
sub = Directory("sub")
sub.add(File("file.txt"))
root.add(sub)

print_tree(root)
