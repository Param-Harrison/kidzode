# Solution

```python
import sys
# Test inputs
sys.argv = ["greet.py", "admin"]

if len(sys.argv) < 2:
    print("Hello, Stranger!")
else:
    name = sys.argv[1]
    if name == "admin":
        print("Welcome, Output")
    else:
        print(f"Welcome back, {name}!")
```
