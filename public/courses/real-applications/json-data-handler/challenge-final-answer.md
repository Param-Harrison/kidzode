# Solution

```python
import json

weather_data = '''
{
    "location": {
        "name": "Tokyo",
        "country": "Japan"
    },
    "current": {
        "temp_c": 22,
        "condition": "Sunny",
        "humidity": 45
    }
}
'''

data = json.loads(weather_data)

city = data['location']['name']
temp = data['current']['temp_c']
cond = data['current']['condition']

print(f"Weather in {city}: {cond}, {temp}°C")
```

Output:
```
Weather in Tokyo: Sunny, 22°C
```

You are now a real Data Handler! 🎓
