# Growing Lines 📏

## Quick Reminder
You learned that `for count in range(5)` repeats 5 times. Now let's make something grow!

## Your Mission
What if each row should have a DIFFERENT number of emojis? We can use the `count` variable!

## The Count Variable
Every time the loop runs, `count` changes:
- First time: count = 0
- Second time: count = 1
- Third time: count = 2
- And so on...

We can USE this number:
```python
for row_number in range(5):
    print("🚀" * row_number)
```

This prints:
```
(nothing because row_number is 0)
🚀
🚀🚀
🚀🚀🚀
🚀🚀🚀🚀
```

## The +1 Trick
If you want to start at 1 instead of 0:
```python
print("🚀" * (row_number + 1))
```

## Try It!
1. Run the code
2. Watch the triangle grow!
3. Change the emoji or the range!

## What You Learned
✅ The loop variable changes each time (0, 1, 2, 3, 4...)
✅ You can USE this variable inside the loop
✅ Add 1 to start counting from 1 instead of 0
