### One way to solve it:

```python
def minutes_to_seconds(m):
    return m * 60

def hours_to_minutes(h):
    return h * 60

hours = int(input("How many hours? "))

mins = hours_to_minutes(hours)
secs = minutes_to_seconds(mins)

print(hours, "hours is:")
print(mins, "minutes")
print(secs, "seconds")
```
