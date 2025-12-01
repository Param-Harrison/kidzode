# Add Windows Using a Loop

Perfect, Teleporting Turtle! Your house has a door!
But it's dark inside! Houses need windows!
Instead of drawing each window separately, let's use a loop to save time!

## 🎯 Today's Mission
Draw 2 windows using a loop - write the code once, draw twice!

## 📚 Before You Start
You know how to use `penup()`, `goto()`, and `pendown()` to move without drawing.

## Let's Do It!
1. Read the code - see the `for` loop drawing 2 windows!
2. Press the green **Run** button
3. Watch both windows appear!

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

## ✨ Magic Moment
Two windows appear automatically - the loop drew them both!

## 💡 Important Things to Remember
- `for position in window_positions:` repeats for each window location
- `position[0]` is the x coordinate, `position[1]` is the y coordinate
- `range(4)` repeats 4 times (perfect for a square!)
- `setheading(0)` points the turtle to the right (0 degrees)
- Loops save you from writing the same code over and over!

## 🎨 Try This Next!
Add a third window! Add `(45, 60)` to the `window_positions` list!

## 🤔 Stuck? Check This!
- **Windows in wrong place?** Check the numbers in `window_positions`
- **Windows not squares?** Make sure the inner loop uses `range(4)`
- **Lines connecting windows?** Make sure you have `penup()` before each `goto()`

## 🌟 Show Your Parents!
"Look! I used a loop to draw multiple windows - loops make coding faster!"

You just unlocked the **Loop Master** superpower! ⭐
