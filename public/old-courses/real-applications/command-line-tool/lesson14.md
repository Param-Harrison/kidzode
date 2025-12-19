# True/False Flags

For flags like `--verbose`, we don't want a value.
We just want to know if it's there.
Use `action="store_true"`.

```python
import argparse
import sys

sys.argv = ["app.py", "--fast"]

parser = argparse.ArgumentParser()
# If --fast is present, args.fast = True. Else False.
parser.add_argument("--fast", action="store_true")

args = parser.parse_args()

if args.fast:
    print("Turbo Mode Activated! 🚀")
else:
    print("Slow mode...")
```

## Try This!
Remove `--fast` and verify it prints "Slow mode".
