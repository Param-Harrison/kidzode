# Rectangle Pattern

Squares are cool, but what about rectangles?

We need TWO numbers: width and height!

```python
symbol = "#"
width = 10
height = 3

for i in range(height):
    print(symbol * width)
```

You'll see:
```
##########
##########
##########
```

Wide and short!

**How it works:**
- `width` controls how long the line is (`* 10`)
- `height` controls how many times the loop runs (`range(3)`)

## Try This!
Make a tall, thin tower: `width = 3`, `height = 10`
