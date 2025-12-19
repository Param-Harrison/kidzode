# Many Arguments

We can have as many as we want!
`program.py 5 10 add`

```python
import sys
sys.argv = ["calc.py", "5", "10"]

a = int(sys.argv[1])
b = int(sys.argv[2])

print(f"Sum: {a + b}")
```

## Try This!
Add a 3rd number to the args and include it in the sum!
