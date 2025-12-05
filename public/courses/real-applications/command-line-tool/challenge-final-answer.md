# Solution

```python
import argparse
import sys

# Test
sys.argv = ["todo.py", "add", "Sleep", "--priority", "high"]

tasks = []
RED = "\033[91m"
RESET = "\033[0m"

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest="command")

# Add
p_add = subparsers.add_parser("add")
p_add.add_argument("task")
p_add.add_argument("--priority", default="normal")

# List
p_list = subparsers.add_parser("list")

args = parser.parse_args()

if args.command == "add":
    if args.priority == "high":
        print(f"Added: {RED}[HIGH] {args.task}{RESET}")
    else:
        print(f"Added: [NORMAL] {args.task}")

elif args.command == "list":
    print("Listing tasks...")
    # (In a real app, read from file)
```
