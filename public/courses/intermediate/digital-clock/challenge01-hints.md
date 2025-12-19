# Hints for Global Clock Challenge

## 🟢 Hint 1
To "offset" time, you can use `timedelta`:
```python
from datetime import timedelta
new_time = now + timedelta(hours=5)
```

## 🟡 Hint 2
Loop through your dictionary of cities:
```python
for city, offset in offsets.items():
```

## 🟠 Hint 3
Inside the loop, get the current time, add the offset, and format it nicely!
