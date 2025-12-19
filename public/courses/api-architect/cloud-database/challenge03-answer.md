### One way to solve it:

```python
nums = [{"n": 1}, {"n": 2}]

print("Count:", len(nums))

total = 0
for x in nums:
    total += x["n"]

print("Sum:", total)
```
