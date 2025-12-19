### One way to solve it:

```python
import datetime
from datetime import timedelta
import time

# Offsets from UTC (or your local time for simplicity)
cities = {
    "London": 0,
    "New York": -5,
    "Tokyo": 9,
    "Paris": 1
}

print("🌎 GLOBAL DIGITAL CLOCK 🌎")

while True:
    print("\n" + "="*20)
    for name, offset in cities.items():
        # Get UTC time and add the offset
        utc_moment = datetime.datetime.utcnow()
        city_time = utc_moment + timedelta(hours=offset)
        
        display = city_time.strftime("%I:%M:%S %p")
        print(f"{name:10} | {display}")
    
    time.sleep(1)
```
