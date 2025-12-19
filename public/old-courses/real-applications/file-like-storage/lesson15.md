# Pretty Printing Trees

To accept the true power of trees, you need **Recursion**.
A function that calls itself! 😵‍💫

```python
def print_tree(directory, indent=0):
    spaces = "  " * indent
    print(f"{spaces}📁 {directory.name}/")
    
    for item in directory.children:
        if isinstance(item, Directory):
            print_tree(item, indent + 1) # RECURSION!
        else:
            print(f"{spaces}  📄 {item.name}")

# It digs deep into every folder automatically!
```

## Try This!
Create a complex tree and run `print_tree(root)`!
