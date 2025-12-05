# Positional Arguments

Arguments without `--` are **Positional** (Required).

```python
import argparse
import sys

sys.argv = ["math.py", "5", "10"]

parser = argparse.ArgumentParser()
parser.add_argument("x", type=int, help="First Number")
parser.add_argument("y", type=int, help="Second Number")

args = parser.parse_args()

print(f"Sum: {args.x + args.y}")
```

It automatically error-checks if they are missing!

## Try This!
Remove "10" from sys.argv and see the error message (in a real terminal).
