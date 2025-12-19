# Folders (Directories)

Files live inside **Directories**.
A Directory contains a list of files.

```python
# We need the File class too!
class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name):
        self.name = name
        self.files = [] # A list of File objects!
    
    def add_file(self, file_obj):
        self.files.append(file_obj)
        print(f"Added {file_obj.name} to {self.name}")

root = Directory("root")
f1 = File("img.png")

root.add_file(f1)
```

You'll see:
```
Added img.png to root
```

We are building the tree! 🌳

## Try This!
Add a second file "music.mp3" to the root directory!
