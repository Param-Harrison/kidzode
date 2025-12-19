# Missing Arguments

What if the user forgets the argument?
`sys.argv[1]` will crash with `IndexError`! 💥

We must check the **Length** first.

```python
import sys
sys.argv = ["program.py"] # No name provided!

if len(sys.argv) < 2:
    print("Error: Please provide a name!")
else:
    print(f"Hello, {sys.argv[1]}")
```

Always protect your inputs! 🛡️

## Try This!
Add a name to the list to fix the error!
