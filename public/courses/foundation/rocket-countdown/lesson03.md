# Wait for It... ⏳

## Quick Reminder
Your countdown works, but it happens too fast! We need to slow it down.

## Your Mission
Make the countdown feel real by waiting 1 second between each number!

## The Time Toolbox
Remember toolboxes? (We used `random` before!) There's another one called `time`:

```python
import time
```

This gives us the power to pause our code!

## time.sleep()
To wait for 1 second:
```python
time.sleep(1)
```

The number is how many seconds to wait.

## Putting It Together
```python
import time

for number in range(5, 0, -1):
    print(number)
    time.sleep(1)  # Wait 1 second

print("BLAST OFF!")
```

## Try It!
1. Run the code
2. Watch it count slowly... like a real launch!
3. Feel the suspense! 🚀

## What You Learned
✅ `import time` opens the time toolbox
✅ `time.sleep(1)` pauses for 1 second
✅ You can control HOW FAST your code runs!
