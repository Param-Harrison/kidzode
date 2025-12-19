### One way to solve it:

```python
items = [
    {"n": "A", "t": "Trash"},
    {"n": "B", "t": "Good"},
    {"n": "C", "t": "Trash"}
]

clean_list = []

for i in items:
    if i["t"] != "Trash":
        clean_list.append(i)

print("Saved Items:", clean_list)
```
