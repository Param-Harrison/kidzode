#--help

Every tool needs a manual.
If the command is `--help` or `-h`, show instructions!

```python
import sys
sys.argv = ["tool.py", "--help"]

def show_help():
    print("My Tool v1.0")
    print("Commands:")
    print("  start   - Start the engine")
    print("  stop    - Stop the engine")

if len(sys.argv) < 2 or "--help" in sys.argv:
    show_help()
```

User friendly! 🤝

## Try This!
Add a version check `--version` that prints "v1.0".
