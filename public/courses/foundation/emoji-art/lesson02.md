# Repeat Machine 🤖

## Quick Reminder
You learned to repeat text on ONE line using `*`. Now let's repeat on MANY lines!

## Your Mission
What if you want to print something 5 times on separate lines? You could write:
```python
print("❤️❤️❤️")
print("❤️❤️❤️")
print("❤️❤️❤️")
print("❤️❤️❤️")
print("❤️❤️❤️")
```

But that's a lot of typing! There's a better way: **loops**!

## The For Loop
A loop tells Python: "Do this thing multiple times."

```python
for count in range(5):
    print("❤️❤️❤️")
```

**What this means:**
- `range(5)` = do it 5 times
- `count` = keeps track of which time we're on (0, 1, 2, 3, 4)
- The indented line runs each time!

## Important: Indentation!
The line after `for` MUST be indented (pushed in with spaces). This shows Python which code to repeat.

## Try It!
1. Run the code
2. Count the rows — there should be 5!
3. Change `range(5)` to `range(10)`

## What You Learned
✅ `for count in range(5):` repeats 5 times
✅ The indented code is what gets repeated
✅ Loops save you LOTS of typing!
