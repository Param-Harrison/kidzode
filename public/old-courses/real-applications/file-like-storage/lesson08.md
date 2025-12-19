# Searching

How do we find a file?
We loop and check names!

```python
class Directory:
    # ... init and add methods ...
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def add(self, item):
        self.children.append(item)

    def find(self, target_name):
        for item in self.children:
            if item.name == target_name:
                return item
        return None

# Setup
root = Directory("root")
f = File("secret.txt", "1234") # File class from before
root.add(f)

# Search
found = root.find("secret.txt")
if found:
    print("Found it!")
else:
    print("404 Not Found")
```

## Try This!
Search for "missing.txt" and check that it returns None!
