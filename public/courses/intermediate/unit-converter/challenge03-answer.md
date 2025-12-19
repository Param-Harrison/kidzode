### One way to solve it:

```python
def double_it(n):
    return n * 2

def triple_it(n):
    return n * 3

def runner(number, action):
    result = action(number)
    print("Input:", number, "-> Result:", result)

print("--- FUNCTION RUNNER ---")
runner(10, double_it)
runner(10, triple_it)
```
