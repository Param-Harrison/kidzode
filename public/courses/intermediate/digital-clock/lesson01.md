# The Perfect Format ⏰

## Your Mission
Master time! Today we're building a real digital clock that tells time using Python.

## Getting the Current Time
Python has a `datetime` toolbox that knows what time it is:

```python
from datetime import datetime

now = datetime.now()
print(now.hour)    # Current hour
print(now.minute)  # Current minute
print(now.second)  # Current second
```

## Formatting Time Nicely
We can make it look like a real clock:
```python
time_string = now.strftime("%H:%M:%S")
# Shows: 14:30:45
```

## Try It!
1. Run the code
2. See the current time!
3. Run it again a few seconds later

## What You Learned
✅ `datetime.now()` gets the current time
✅ `.strftime()` formats time as text
✅ `%H:%M:%S` = hours:minutes:seconds
