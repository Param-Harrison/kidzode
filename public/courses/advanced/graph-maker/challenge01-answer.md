### One way to solve it:

```python
fruit = [
    {"n": "Apple", "c": 5},
    {"n": "Banana", "c": 2},
    {"n": "Orange", "c": 7}
]

for item in fruit:
    count = item["c"]
    name = item["n"]
    print(name, ":", "*" * count)
```
