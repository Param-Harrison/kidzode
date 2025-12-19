### One way to solve it:

```python
list_z = [{"id": 5, "v": "Five"}]
find = 5

for l in list_z:
    if l["id"] == find:
        print("Got it:", l["v"])
        break
```
