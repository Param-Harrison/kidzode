# Bad Data happens

What if a line is broken? "Bob,Twenty" (Not a number!)
Our generator should handle it without crashing everything.

```python
def safe_parser(lines):
    for line in lines:
        try:
            parts = line.split(",")
            age = int(parts[1]) # Might crash!
            yield {"name": parts[0], "age": age}
        except ValueError:
            print(f"Skipping bad line: {line}")

data = ["Alice,10", "Bob,Twenty", "Charlie,30"]
users = list(safe_parser(data))

print(users)
```

You'll see a warning for Bob, but Alice and Charlie survive! 🛡️

## Try This!
Catch `IndexError` too (e.g. "Dave" with no age)!
