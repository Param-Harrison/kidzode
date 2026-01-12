# ========================================
# 🌡️ CHALLENGE 2: Temperature Report
# ========================================

cities = {
    "London": {"temp": 15, "status": "Rainy"},
    "Tokyo": {"temp": 28, "status": "Sunny"},
    "Paris": {"temp": 20, "status": "Cloudy"}
}

city = input("Enter city: ")

if city in cities:
    info = cities[city]
    print(city, "-", str(info["temp"]) + "°C,", info["status"])
else:
    print("City not found!")
