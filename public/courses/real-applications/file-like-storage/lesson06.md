# Listing Content

A directory isn't useful if we can't see inside.
Let's make an `ls()` method (List Directory).

```python
class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name):
        self.name = name
        self.files = []
    
    def add(self, f):
        self.files.append(f)
    
    def ls(self):
        print(f"--- {self.name} ---")
        for f in self.files:
            print(f"- {f.name}")

d = Directory("Downloads")
d.add(File("game.exe"))
d.add(File("movie.mp4"))

d.ls()
```

You'll see:
```
--- Downloads ---
- game.exe
- movie.mp4
```

Just like the terminal! 🖥️

## Try This!
Add a 3rd file and list again!
