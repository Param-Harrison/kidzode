# Filtering Weather ☀️

We can loop through the list inside the dictionary to find things.

### The Loop
```python
for day in weather["forecast"]:
    print(day["temp"])
```

### Your Goal
1. Create data with 3 days of forecast.
2. Loop through `weather["forecast"]`.
3. Inside loop, check `if day["temp"] > 20`.
4. If yes, print "Warm day on " + `day["day"]`.

### Achievement
☀️ **Meteorologist**: You processed a list of weather reports!
