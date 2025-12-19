# Subcommands

Tools like `git` have subcommands: `git commit`, `git push`.
This is just `sys.argv[1]`!

```python
import sys
sys.argv = ["git_fake.py", "commit"]

if len(sys.argv) < 2:
    print("Usage: git_fake <command>")
else:
    command = sys.argv[1]
    
    if command == "commit":
        print("Committing code...")
    elif command == "push":
        print("Pushing to cloud...")
    else:
        print(f"Unknown command: {command}")
```

## Try This!
Add a "status" command that prints "All good"!
