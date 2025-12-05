# Meet Argparse

Python has a library just for this!
It handles help, errors, types, and everything.

```python
import argparse
import sys

# Simulate args
sys.argv = ["app.py", "--name", "Param"]

parser = argparse.ArgumentParser(description="My Cool App")

# Define expected args
parser.add_argument("--name", type=str, help="Your name")

# Parse them!
args = parser.parse_args()

print(f"Hello {args.name}")
```

It does the hard work for us! 🎉

## Try This!
Change `--name` to `--age` with type `int`!
