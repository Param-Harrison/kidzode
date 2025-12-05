# Go Back! (cd ..)

To go back up the tree, a directory needs to know its **Parent**.
We link them when adding!

```python
class Directory:
    def __init__(self, name, parent=None):
        self.name = name
        self.children = []
        self.parent = parent
    
    def add(self, item):
        item.parent = self # Link back!
        self.children.append(item)

# Now 'cd' logic:
# if name == ".." and self.current.parent:
#    self.current = self.current.parent
```

Doubly-Linked List style! 🔗

## Try This!
Implement `cd("..")` using `self.current.parent`!
