### One way to solve it:

```python
posts = ["Hi", "Buy Now"]
safe = []

for p in posts:
    if "Buy" not in p:
        safe.append(p)

print(safe)
```
