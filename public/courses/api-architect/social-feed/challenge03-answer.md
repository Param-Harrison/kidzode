### One way to solve it:

```python
data = [{"v": 1}, {"v": 5}]
best = 0

for d in data:
    if d["v"] > best:
        best = d["v"]

print("Max value:", best)
```
