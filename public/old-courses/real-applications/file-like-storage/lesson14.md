# Moving Files

Moving is simple:
1. Remove from Old Directory.
2. Add to New Directory.

```python
    def mv(self, filename, new_dir):
        item = self.find(filename)
        if item:
            self.children.remove(item) # Bye old home
            new_dir.add(item)          # Hello new home
        else:
            print("File not found")
```

It's just list manipulation!

## Try This!
Move "img.png" from "Downloads" to "Pictures"!
