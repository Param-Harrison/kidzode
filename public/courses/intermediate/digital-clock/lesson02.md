# Live Time 🔴

## Quick Reminder
You can get the current time with `datetime.now()`. Now let's make it update continuously!

## Your Mission
Make a clock that updates every second like a real digital clock!

## The Pattern
```python
import time
from datetime import datetime

while True:
    now = datetime.now()
    print(now.strftime("%H:%M:%S"))
    time.sleep(1)  # Wait 1 second
```

This creates a loop that:
1. Gets the current time
2. Prints it
3. Waits 1 second
4. Repeats forever!

## Try It!
1. Run the code
2. Watch the time update each second
3. Press Stop to exit!

## What You Learned
✅ `while True` runs forever
✅ `time.sleep(1)` pauses for 1 second
✅ The loop keeps updating the time!
