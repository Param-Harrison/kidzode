### One way to solve it:

```python
menu = [{"n": "Water", "p": 1}, {"n": "Steak", "p": 20}]

for food in menu:
    if food["p"] < 5:
        print("Budget Item:", food["n"])
```
