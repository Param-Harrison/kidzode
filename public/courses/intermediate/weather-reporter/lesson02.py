cities = {
    "London": {
        "temp": 15,
        "status": "Rainy"
    },
    "Sydney": {
        "temp": 25,
        "status": "Sunny"
    }
}

# Accessing nested data
city = "Sydney"
temp = cities[city]["temp"]
sky = cities[city]["status"]

print(f"REPORT for {city}:")
print(f"- Temperature: {temp}°C")
print(f"- Sky: {sky}")

# TRY THIS: Add a 'wind' speed to the Sydney dictionary!
