# Hints

You need to ask the user for a number, but `input()` gives you text. You need to convert it to a number!

---

Use `int()` to convert text to a number. After asking with `input()`, use `int(start)` to convert it.

---

Once you have the number, use it in `range()`. Remember: `range(start_number, 0, -1)` counts backwards from start_number down to 1.

---

The pattern is: ask with `input()`, convert with `int()`, then use the number in your `range()` for the countdown loop!

