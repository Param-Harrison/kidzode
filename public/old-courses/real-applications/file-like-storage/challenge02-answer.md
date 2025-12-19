# Solution

```python
class File:
    def __init__(self, name, content):
        self.name = name
        self.size = len(content)

class Directory:
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, item):
        self.children.append(item)

    def ls(self):
        print(f"--- {self.name} ---")
        for item in self.children:
            print(f"- {item.name} ({item.size}b)")

    def get_size(self):
        return sum(c.size for c in self.children)

# Usage
vid = Directory("Video")
vid.add(File("movie.mp4", "video data..."))

vid.ls()
print(f"Total: {vid.get_size()} bytes")
```

Output:
```
--- Video ---
- movie.mp4 (13b)
Total: 13 bytes
```
