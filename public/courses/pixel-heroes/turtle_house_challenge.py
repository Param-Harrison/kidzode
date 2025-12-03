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
# Your code here:

# YOUR TURN! Add flowers
# HINT: Use a loop with flower positions like windows
# HINT: t.circle(10) makes a small flower
# Your code here:

# BONUS: Add a fence or path!

turtle.done()
