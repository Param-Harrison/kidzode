# Draw a Square

Use Python's turtle to draw a perfect square!

## What to Do
1. Press Run
2. Watch the turtle draw!

```python
import turtle

# Create a turtle
t = turtle.Turtle()

# Draw a square (4 sides)
t.forward(100)  # Move forward 100 steps
t.left(90)      # Turn left 90 degrees
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)

# Keep the window open
turtle.done()
```

## Remember
- `import turtle` gives you drawing powers
- `turtle.Turtle()` creates a turtle
- `forward(100)` moves forward 100 steps
- `left(90)` turns left 90 degrees
- Square has 4 equal sides

## Try This
Change `100` to `150` for a bigger square!

## If Stuck
- Make sure you have `turtle.done()` at the end
- Try smaller numbers like `50`
- Check all `forward()` numbers are the same

You did it! ⭐
