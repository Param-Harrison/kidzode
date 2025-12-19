# Folders inside Folders

A Directory can hold files... AND other directories!
We just treat `Directory` objects like `File` objects.

```python
# Assume Directory class from Lesson 6

root = Directory("root")
docs = Directory("docs") # Nested folder

root.add(docs) # Add folder to folder

root.ls()
```

You'll see:
```
--- root ---
- docs
```

But wait... `docs` is printed like a file. We should distinguish them!

## Try This!
Modify the loop to check `isinstance(f, Directory)` and print `[DIR]` next to it!
