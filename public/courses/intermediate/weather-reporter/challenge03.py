# ========================================
# 📊 CHALLENGE 3: Average Temperature
# ========================================

cities = {
    "London": {"temp": 15, "status": "Rainy"},
    "Tokyo": {"temp": 28, "status": "Sunny"},
    "Paris": {"temp": 20, "status": "Cloudy"}
}

# Add up all temperatures
total = 0
for city in cities:
    total = total + cities[city]["temp"]

# Calculate average
average = total / len(cities)

print("Average temperature:", str(average) + "°C")
