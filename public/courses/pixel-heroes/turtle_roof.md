# Add a Triangle Roof

Add a triangle roof on top of your square house!

## What to Do
1. Press Run
2. Watch your house appear!

```python
import turtle

t = turtle.Turtle()

# Draw the square house
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)

# Move to draw the roof
t.forward(100)
t.left(60)

# Draw the triangle roof
t.forward(100)
t.left(120)
t.forward(100)

turtle.done()
```

## Remember
- Triangles use 120-degree turns (not 90)
- You can draw multiple shapes in one program
- `left(60)` positions the turtle to start the roof

## Try This
Change roof size - use `120` instead of `100`!

## If Stuck
- Check the `left(60)` positioning line
- Use `left(120)` for the triangle
- All `forward()` numbers in roof should match

You did it! ⭐
