# How big is the folder?

A folder's size is the **Sum** of all file sizes inside it.
We can loop and add them up!

```python
    # Inside Directory class...
    def get_size(self):
        total = 0
        for item in self.children:
            # Assume item has a .size property (we need to add that!)
            total += item.size
        return total
```

Note: A simple `File` size is usually `len(content)`.

## Try This!
Add `self.size = len(content)` to the `File` class and test `dir.get_size()`!
