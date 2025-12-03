# Add a Triangle Roof

Add a triangle roof on top of your square house! Press Run and watch your house appear!

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

**The trick:** Triangles use 120-degree turns (not 90 like squares)! You can draw multiple shapes in one program. `left(60)` positions the turtle to start the roof at the right angle.

Try changing the roof size - use `120` instead of `100` for a bigger roof!
