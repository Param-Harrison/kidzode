### One way to solve it:

```python
cities = {
    "New York": {"temp": 2, "status": "Snowing"},
    "Miami": {"temp": 30, "status": "Sunny"},
    "Seattle": {"temp": 10, "status": "Rainy"}
}

print("🌎 GLOBAL WEATHER REPORT 🌎")
print("-" * 25)

for name, info in cities.items():
    print(f"CITY: {name}")
    print(f"TEMP: {info['temp']}°C")
    print(f"SKY:  {info['status']}")
    print("-" * 25)
```
