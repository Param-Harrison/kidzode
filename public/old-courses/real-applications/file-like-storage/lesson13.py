class Node:
    def __init__(self, name, parent=None):
        self.name = name
        self.parent = parent

def get_path(item):
    path = []
    current = item
    while current:
        path.insert(0, current.name)
        current = current.parent
    return "/" + "/".join(path)

root = Node("root")
home = Node("home", parent=root)
file = Node("test.txt", parent=home)

print(get_path(file))
