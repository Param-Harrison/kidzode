# Add Windows Using a Loop

Draw 2 windows using a loop - write code once, draw twice!

## What to Do
1. Press Run
2. Watch both windows appear!

```python
import turtle

t = turtle.Turtle()
t.speed(3)  # Make it a bit faster

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

# Draw the door
t.penup()
t.goto(40, 0)
t.pendown()
t.setheading(90)
t.forward(40)
t.left(90)
t.forward(20)
t.left(90)
t.forward(40)

# Draw 2 windows using a loop!
window_positions = [(20, 60), (70, 60)]

for position in window_positions:
    t.penup()
    t.goto(position[0], position[1])
    t.pendown()
    t.setheading(0)
    # Draw a small square window
    for side in range(4):
        t.forward(15)
        t.left(90)

turtle.done()
```

## Remember
- `for position in window_positions:` repeats for each window
- `position[0]` is x, `position[1]` is y
- `range(4)` repeats 4 times (perfect for square!)
- `setheading(0)` points turtle to the right

## Try This
Add a third window! Add `(45, 60)` to the list!

## If Stuck
- Check numbers in `window_positions`
- Inner loop must use `range(4)`
- Use `penup()` before each `goto()`

You did it! ⭐
