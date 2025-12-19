# Deleting

To delete, we `remove` from the list.
Just like deleting from a regular Python list.

```python
    # Inside Directory class...
    def delete(self, name):
        item = self.find(name) # Re-use our find method!
        if item:
            self.children.remove(item)
            print(f"Deleted {name}")
        else:
            print("File not found!")
```

Re-using code (`self.find`) is smart! 🧠

## Try This!
Add this method to existing code and try to delete "secret.txt".
