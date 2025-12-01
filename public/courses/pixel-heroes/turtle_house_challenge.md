# Dream House Garden Challenge

You're a Loop Master now! Your house is complete with windows!
But every dream house needs a beautiful garden!
Can you add flowers, a sun, and maybe even a fence?

## 🎯 Today's Mission
Add a garden with flowers and a sun to make your dream house complete!

## 📚 Before You Start
You know how to use loops, `goto()`, and draw different shapes with turtle.

## Your Challenge!
Add these features to your house:
1. Draw a sun in the sky (circle + lines for rays)
2. Draw 3-5 flowers in the garden (circles work great!)
3. BONUS: Add a fence or pathway!

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

## ✨ Magic Moment
Your complete dream house with a beautiful garden!

## 💡 Important Things to Remember
- `circle(radius)` draws a circle - bigger radius = bigger circle
- You can use loops to draw multiple flowers easily
- `goto(x, y)` with negative numbers goes left or down
- Be creative - there's no wrong way to make YOUR dream house!

## 🎨 Try This Next!
- Change house colors with `t.color("blue")`
- Add a chimney on the roof
- Draw a tree next to the house
- Add your name under the house!

## 🤔 Stuck? Check This!
- **Sun not visible?** Try `goto(-150, 150)` to move it to top-left
- **Flowers too big?** Use smaller numbers like `circle(8)`
- **Want sun rays?** Draw short lines from the sun center in different directions

## 🌟 Show Your Parents!
"Look! I designed my complete dream house with a garden using Python!"

You just unlocked the **Dream House Architect** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 4! 🎉
