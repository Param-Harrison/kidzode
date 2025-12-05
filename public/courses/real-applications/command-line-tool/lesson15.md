# Making it Pretty 🎨

CLIs don't have images, but they have **ANSI Colors**.
It's just a special string code!

```python
RED = "\033[91m"
GREEN = "\033[92m"
RESET = "\033[0m"

print(f"{RED}Error!{RESET}")
print(f"{GREEN}Success!{RESET}")
```

Use this to make your tool look professional.

## Try This!
Create a BLUE color code (`\033[94m`) and print "Ocean".
