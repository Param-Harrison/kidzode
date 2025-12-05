# Cleaning Args

If we process `--count 5`, we should remove them so we don't process them again.
Or just ignore them.

A cleaner way is to pop them from the list.

```python
import sys
args = ["app.py", "--fast", "file.txt"] # Copy of sys.argv

fast_mode = False
if "--fast" in args:
    args.remove("--fast")
    fast_mode = True

# Now processed args are gone
filename = args[1] # "file.txt" (index 0 is app.py)

print(f"Fast: {fast_mode}, File: {filename}")
```

## Try This!
Remove `--verbose` from args and check what is left!
