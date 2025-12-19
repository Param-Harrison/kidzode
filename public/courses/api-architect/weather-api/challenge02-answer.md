### One way to solve it:

```python
data = {"c": [{"n": "A", "val": 1}, {"n": "B", "val": 2}]}

for item in data["c"]:
    if item["n"] == "B":
        print("Found B with val:", item["val"])
```
