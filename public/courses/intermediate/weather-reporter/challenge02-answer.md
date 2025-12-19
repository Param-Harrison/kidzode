### One way to solve it:

```python
city_data = {
    "name": "Chicago",
    "wind": 25,
    "temp": 10
}

print(f"Checking {city_data['name']}...")

if city_data["wind"] > 15:
    print("🌬️ ALERT: High winds detected!")
else:
    print("Wind is calm.")
```
