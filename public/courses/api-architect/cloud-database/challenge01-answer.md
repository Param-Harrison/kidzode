### One way to solve it:

```python
data = [{"i": 1}, {"i": 2}]
bad_id = 1
clean = []

for x in data:
    if x["i"] != bad_id:
        clean.append(x)

print(clean)
```
