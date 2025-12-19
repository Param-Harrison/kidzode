### One way to solve it:

```python
data = {"curr": {"t": 10}}
temp = data["curr"]["t"]

if temp <= 0:
    print("Ice warning")
else:
    print("Water is liquid")
```
