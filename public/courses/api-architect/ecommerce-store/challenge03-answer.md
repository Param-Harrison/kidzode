### One way to solve it:

```python
store = [{"cost": 5, "qty": 2}, {"cost": 4, "qty": 5}]
sum_val = 0

for i in store:
    sum_val += i["cost"] * i["qty"]

print("Total Assets:", sum_val)
```
