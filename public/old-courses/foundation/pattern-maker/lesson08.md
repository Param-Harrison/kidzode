# Inverted Triangle

Let's flip it upside down!

We can count backwards with `range(start, stop, step)`.
Use `-1` as the step!

```python
symbol = "*"

for i in range(5, 0, -1):
    print(symbol * i)
```

You'll see:
```
*****
****
***
**
*
```

It shrinks! 🔻

**How it works:**
- Starts at 5 (`*****`)
- Counts down to 1 (`*`)

## Try This!
Combine the growing triangle AND the shrinking triangle to make an arrow!
