# Getting specific items

`sys.argv[0]` is always the program name.
`sys.argv[1]` is the **first real argument**.

```python
import sys
sys.argv = ["program.py", "Alice"]

name = sys.argv[1] # "Alice"

print(f"Hello, {name}!")
```

This lets us make programs that do different things based on input!

## Try This!
Change "Alice" to your name.
