# Add a Door

Add a door to your house without drawing extra lines!

## What to Do
1. Press Run
2. See the door appear!

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

# Draw the roof
t.forward(100)
t.left(60)
t.forward(100)
t.left(120)
t.forward(100)

# Move to door position WITHOUT drawing
t.penup()          # Lift the pen up
t.goto(30, 0)      # Move to door position
t.pendown()        # Put the pen down

# Draw the door
t.left(90)
t.forward(40)
t.left(90)
t.forward(20)
t.left(90)
t.forward(40)

turtle.done()
```

## Remember
- `penup()` lifts the pen - moves without drawing
- `pendown()` puts the pen down to draw
- `goto(x, y)` moves to exact coordinates

## Try This
Try `goto(70, 0)` to put door on the right side!

## If Stuck
- Use `penup()` BEFORE `goto()`
- Use `pendown()` AFTER `goto()`
- Try different numbers in `goto(x, y)`

You did it! ⭐
