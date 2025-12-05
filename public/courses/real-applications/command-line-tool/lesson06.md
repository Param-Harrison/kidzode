# Using Flags

Sometimes arguments are optional.
We use **Flags** like `--verbose` or `-v`.

We just check if the string is in `sys.argv`!

```python
import sys
sys.argv = ["app.py", "data.txt", "--verbose"]

if "--verbose" in sys.argv:
    print("Verbose mode ON: Loading data...")

print("Done.")
```

Order usually doesn't matter for valid flags here!

## Try This!
Add a `--dry-run` flag that prints "Simulation only" if present.
