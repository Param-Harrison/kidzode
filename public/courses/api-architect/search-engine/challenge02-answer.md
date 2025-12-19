### One way to solve it:

```python
list_x = ["x", "x", "y"]
d = {}

for item in list_x:
    if item in d:
        d[item] += 1
    else:
        d[item] = 1

print(d)
```
