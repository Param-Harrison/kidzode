# ========================================
# 🌌 LESSON 2: The Galaxy Database
# ========================================

# A list of planet dictionaries - our database!
planets = [
    {"name": "Mercury", "moons": 0, "color": "Gray"},
    {"name": "Venus", "moons": 0, "color": "Yellow"},
    {"name": "Earth", "moons": 1, "color": "Blue"},
    {"name": "Mars", "moons": 2, "color": "Red"}
]

# Print all planet names
print("--- OUR PLANETS ---")
for planet in planets:
    print(planet["name"], "-", planet["color"])

# ----------------------------------------
# 🎮 TRY THIS:
# Add Jupiter to the list!
# ----------------------------------------
