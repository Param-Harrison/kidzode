### One way to solve it:

```python
nums = [{"val": 10}, {"val": 50}, {"val": 20}]
top = 0

for x in nums:
    if x["val"] > top:
        top = x["val"]

print("Highest Value:", top)
```
