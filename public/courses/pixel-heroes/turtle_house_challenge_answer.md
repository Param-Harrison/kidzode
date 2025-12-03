# Answer

Here's the complete solution:

```python
import turtle

t = turtle.Turtle()
t.speed(5)

# Draw the house (square)
t.penup()
t.goto(0, 0)
t.pendown()
for side in range(4):
    t.forward(100)
    t.left(90)

# Draw the roof (triangle)
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

# Draw windows
window_positions = [(20, 60), (70, 60)]
for position in window_positions:
    t.penup()
    t.goto(position[0], position[1])
    t.pendown()
    t.setheading(0)
    for side in range(4):
        t.forward(15)
        t.left(90)

# Draw the sun
t.penup()
t.goto(-150, 150)
t.pendown()
t.circle(20)

# Draw flowers
flower_positions = [(-100, -50), (-50, -60), (0, -55), (50, -60), (100, -50)]
for position in flower_positions:
    t.penup()
    t.goto(position[0], position[1])
    t.pendown()
    t.circle(10)

turtle.done()
```

**Remember:** Try solving it yourself first! Understanding how loops and positions work is more important than just copying the answer. Experiment with different positions and sizes!

