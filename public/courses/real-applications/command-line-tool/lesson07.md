# Key-Value Arguments

What about `--count 5`?
We need to find `--count` index, then get the *next* item.

```python
import sys
sys.argv = ["app.py", "--count", "5"]

count = 1 # Default

if "--count" in sys.argv:
    # Find position
    idx = sys.argv.index("--count")
    # Get next item
    count = int(sys.argv[idx + 1])

print(f"Counting to {count}")
```

This is how real tools parse settings! 🛠️

## Try This!
Implement `--name Bob` using the same logic!
