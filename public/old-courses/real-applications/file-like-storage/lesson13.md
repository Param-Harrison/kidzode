# Where am I? (Paths)

A **Path** is the full address: `/root/home/user/doc.txt`
We can find it by following `parent` links all the way up!

```python
def get_path(item):
    path = []
    current = item
    while current:
        path.insert(0, current.name) # Add to front
        current = current.parent
    return "/" + "/".join(path)

# If root -> home -> file
# string is "/root/home/file"
```

## Try This!
Create a deep file structure and print the path of the deepest file!
