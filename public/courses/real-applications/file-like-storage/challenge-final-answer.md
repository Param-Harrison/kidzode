# Solution

```python
class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name, parent=None):
        self.name = name
        self.children = []
        self.parent = parent
    
    def add(self, item):
        self.children.append(item)

class System:
    def __init__(self):
        self.root = Directory("root")
        self.current = self.root
    
    def mkdir(self, name):
        d = Directory(name, self.current)
        self.current.add(d)
    
    def touch(self, name):
        f = File(name)
        self.current.add(f)
    
    def ls(self):
        print(f"--- {self.current.name} ---")
        for item in self.current.children:
            print(f"- {item.name}")

    def cd(self, name):
        if name == ".." and self.current.parent:
            self.current = self.current.parent
            return
        
        for item in self.current.children:
            if item.name == name and isinstance(item, Directory):
                self.current = item
                return
        print("Dir not found")

# Run
os = System()
os.mkdir("home")
os.cd("home")
os.touch("note.txt")
os.ls()
os.cd("..")
```

Output:
```
--- home ---
- note.txt
```
