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
