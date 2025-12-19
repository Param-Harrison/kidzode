### One way to solve it:

```python
planets = [
    {"Name": "Mars", "Life": "No"},
    {"Name": "New Earth", "Life": "Yes"},
    {"Name": "Venus", "Life": "No"}
]

print("Scanning for life...")

for p in planets:
    if p["Life"] == "Yes":
        print("🚨 LIFE DETECTED ON:", p["Name"])
```
