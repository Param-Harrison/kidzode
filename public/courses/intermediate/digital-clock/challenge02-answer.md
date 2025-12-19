### One way to solve it:

```python
import datetime as dt

now = dt.datetime.now()

print("--- TODAYS DATE ---")
# Using f-strings makes it easy!
print(f"{now.year}-{now.month}-{now.day}")

# Bonus:
print(now.strftime("%A, %B %d"))
```
