### One way to solve it:

```python
dist = [100, 50, 200]

print("--- DISTANCE (x10km) ---")
for d in dist:
    # 100 becomes 10 stars
    stars = d // 10
    print("Map:", "*" * stars)
```
