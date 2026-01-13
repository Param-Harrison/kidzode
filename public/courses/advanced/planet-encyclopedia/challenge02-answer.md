# Answer ✅
```python
best = planets[0]
for planet in planets:
    if planet["moons"] > best["moons"]:
        best = planet
print("Winner:", best["name"])
```
