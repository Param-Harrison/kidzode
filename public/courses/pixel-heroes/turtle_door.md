# Add a Door to Your House

Excellent, House Builder! Your house has walls and a roof!
But how do you get inside? Every house needs a door!
Let's add one using a special turtle trick!

## 🎯 Today's Mission
Add a door to your house without drawing extra lines!

## 📚 Before You Start
You know how to draw squares and triangles with the turtle.

## Let's Do It!
1. Read the code - notice `penup()` and `pendown()`!
2. Press the green **Run** button
3. See the door appear!

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

## ✨ Magic Moment
A door appears on your house without any extra lines!

## 💡 Important Things to Remember
- `penup()` lifts the pen so the turtle moves without drawing
- `pendown()` puts the pen down to start drawing again
- `goto(x, y)` moves the turtle to exact coordinates
- This lets you draw in different places without connecting lines!

## 🎨 Try This Next!
Try `goto(70, 0)` to put the door on the right side instead!

## 🤔 Stuck? Check This!
- **Line to the door?** Make sure you have `penup()` BEFORE `goto()`
- **No door?** Check that you have `pendown()` AFTER `goto()`
- **Door in wrong place?** Try different numbers in `goto(x, y)`

## 🌟 Show Your Parents!
"Look! I learned how to move the turtle without drawing - like lifting a real pen!"

You just unlocked the **Teleporting Turtle** superpower! ⭐
