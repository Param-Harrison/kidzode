# ========================================
# 🔎 LESSON 3: City Lookup
# ========================================

cities = {
    "London": {"temp": 15, "status": "Rainy"},
    "Tokyo": {"temp": 28, "status": "Sunny"},
    "Paris": {"temp": 20, "status": "Cloudy"}
}

# Ask for a city
city = input("Enter a city: ")

# Check if it exists BEFORE looking it up!
if city in cities:
    info = cities[city]
    print("Temperature:", info["temp"], "°C")
    print("Weather:", info["status"])
else:
    print("Sorry,", city, "not found in our database!")

# ----------------------------------------
# 🎮 TRY THIS:
# Search for "Tokyo" (found) and "Mars" (not found)!
# ----------------------------------------
