# Everything is a String

Arguments are ALWAYS strings.
`"5"` is not `5`.

We need to convert them.

```python
import sys
sys.argv = ["math.py", "5"]

# number = sys.argv[1] + 1  # ❌ ERROR! "5" + 1

number = int(sys.argv[1]) # ✅ Convert to Int
print(f"Result: {number + 1}")
```

You'll see: `Result: 6`.

## Try This!
Change "5" to "ten". What happens? (ValueError!)
