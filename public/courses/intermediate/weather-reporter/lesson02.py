# ========================================
# 🔍 LESSON 2: Inside the Dictionary
# ========================================

# Each city has its own dictionary with details
cities = {
    "London": {"temp": 15, "status": "Rainy"},
    "Tokyo": {"temp": 28, "status": "Sunny"},
    "Paris": {"temp": 20, "status": "Cloudy"}
}

# Get all info for London
city = "London"
info = cities[city]
print(city + " info:", info)

# Get specific pieces
print("Temperature:", cities[city]["temp"])
print("Status:", cities[city]["status"])

# ----------------------------------------
# 🎮 TRY THIS:
# Add "New York" with temp 22 and status "Windy"!
# ----------------------------------------
