# Challenge: Dream House Garden

Challenge time! Add a garden with flowers and a sun to make your dream house complete!

Add these features:
- Draw a sun in the sky (circle + lines for rays)
- Draw 3-5 flowers in the garden (circles work great!)
- BONUS: Add a fence or pathway!

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

# YOUR TURN! Add a sun
# HINT: t.goto(-150, 150) to move to top left
# HINT: t.circle(20) draws a circle!

# YOUR TURN! Add flowers
# HINT: Use a loop with flower positions like windows
# HINT: t.circle(10) makes a small flower

# BONUS: Add a fence or path!

turtle.done()
```

**Tips:** `circle(radius)` draws a circle. Use loops to draw multiple flowers. `goto(x, y)` with negative numbers goes left or down. Try `goto(-150, 150)` for the sun, and use smaller numbers like `circle(8)` for flowers!

Want to make it colorful? Change house colors with `t.color("blue")` - make it your own!
