# Add a Triangle Roof

Amazing work, Turtle Artist! You can draw a perfect square!
Now let's turn that square into a house by adding a triangle roof on top!
Can you make your turtle draw both shapes?

## 🎯 Today's Mission
Add a triangle roof on top of your square house!

## 📚 Before You Start
You know how to use `forward()` and `left()` to draw a square.

## Let's Do It!
1. Read the code below - notice the triangle uses 120 degrees!
2. Press the green **Run** button
3. Watch your house appear!

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

## ✨ Magic Moment
Your square now has a triangle roof - it looks like a house!

## 💡 Important Things to Remember
- Triangles use 120-degree turns (not 90 like squares)
- You can draw multiple shapes in one program
- The turtle remembers where it is and which way it's facing
- `left(60)` positions the turtle to start the roof

## 🎨 Try This Next!
Try changing the roof size - use `120` instead of `100` for `forward()`

## 🤔 Stuck? Check This!
- **Roof in wrong place?** Check the `left(60)` positioning line
- **Roof wrong shape?** Make sure you use `left(120)` for the triangle
- **Lines don't connect?** All `forward()` numbers in the roof should match

## 🌟 Show Your Parents!
"Look! I drew a house with a roof using geometry and code!"

You just unlocked the **House Builder** superpower! ⭐
