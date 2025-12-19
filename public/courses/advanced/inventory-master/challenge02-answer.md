### One way to solve it:

```python
items = [
    {"name": "Ruby", "type": "Gem", "val": 500},
    {"name": "Bone", "type": "Trash", "val": 0},
    {"name": "Diamond", "type": "Gem", "val": 1000}
]

money = 0

for i in items:
    if i["type"] == "Gem":
        print("Sold", i["name"])
        money += i["val"]

print("Total Earned:", money)
```
