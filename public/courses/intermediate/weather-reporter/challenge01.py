# ========================================
# 🏆 CHALLENGE 1: Global Weather
# ========================================

weather = {
    "London": "Rainy",
    "Tokyo": "Sunny",
    "Paris": "Cloudy",
    "Sydney": "Warm",
    "New York": "Windy"
}

city = input("Enter city: ")

if city in weather:
    print("Weather in", city + ":", weather[city])
else:
    print("Sorry,", city, "not found!")
