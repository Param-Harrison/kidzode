# Hints

Start with the sun! Use `penup()` and `goto(-150, 150)` to move to the top left, then `pendown()` and `circle(20)` to draw a circle.

---

For flowers, create a list of positions like you did for windows: `flower_positions = [(x1, y1), (x2, y2), ...]`. Use negative y values to put them below the house!

---

Use a loop to draw each flower! `for position in flower_positions:` then `goto()` to that position and draw a circle with `circle(10)`.

---

Remember to use `penup()` before each `goto()` and `pendown()` before drawing! This prevents drawing lines between flowers.

