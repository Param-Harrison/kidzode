# Moving Around (cd)

In a terminal, you exist in a **Current Directory**.
You can change it with `cd`.

We need to track `self.current_dir` in our System.

```python
class System:
    def __init__(self, root):
        self.root = root
        self.current = root # Start at root
    
    def pwd(self):
        print(f"You are in: {self.current.name}")

    def cd(self, dir_name):
        # Look for dir in current children
        found = self.current.find(dir_name)
        if found:
            self.current = found
            print(f"Moved to {dir_name}")
        else:
            print("Directory not found")

# Imagine root/home exists
# sys = System(root)
# sys.cd("home")
```

## Try This!
Create a `System`, add a folder, and `cd` into it!
