# Draw a Square

Time to draw! Use Python's turtle to draw a perfect square. Press Run and watch the turtle draw!

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

**How it works:** `import turtle` gives you drawing powers! `turtle.Turtle()` creates a turtle. `forward(100)` moves forward 100 steps. `left(90)` turns left 90 degrees. A square has 4 equal sides, so repeat 4 times!

Try changing `100` to `150` for a bigger square, or `50` for a smaller one!
