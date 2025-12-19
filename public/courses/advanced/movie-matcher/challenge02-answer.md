### One way to solve it:

```python
films = [
    {"t": "A", "mins": 120},
    {"t": "B", "mins": 45},
    {"t": "C", "mins": 80}
]

print("Scanning for quick watches...")
for f in films:
    if f["mins"] < 90:
        print("Quick Pick:", f["t"])
```
