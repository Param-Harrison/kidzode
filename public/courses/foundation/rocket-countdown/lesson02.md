# Counting Backwards ⏪

## Quick Reminder
`range(1, 6)` counts UP from 1 to 5. But for a rocket launch, we need to count DOWN!

## Your Mission
Let's count from 10 down to 1 — like a real rocket launch!

## Counting Backwards with Range
We add a third number to `range()` — the "step":

```python
for number in range(10, 0, -1):
    print(number)
```

This means:
- **Start** at 10
- **Stop** before 0
- **Step** by -1 (subtract 1 each time)

So: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1!

## How to Remember
```
range(start, stop, step)
```
- Positive step = count UP
- Negative step = count DOWN

## Try It!
1. Run the code
2. Watch the countdown!
3. See "Blast off!" at the end

## What You Learned
✅ `range(10, 0, -1)` counts down from 10 to 1
✅ The third number is the "step" (how much to add each time)
✅ Negative step means subtract!
