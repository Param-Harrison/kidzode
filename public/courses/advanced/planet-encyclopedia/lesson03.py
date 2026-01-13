# ========================================
# 🔭 LESSON 3: Planet Finder
# ========================================

planets = [
    {"name": "Mercury", "moons": 0},
    {"name": "Venus", "moons": 0},
    {"name": "Earth", "moons": 1},
    {"name": "Mars", "moons": 2}
]

def find_planet(search_name):
    for planet in planets:
        if planet["name"] == search_name:
            return planet
    return None

# Search for Mars
result = find_planet("Mars")
if result:
    print("Found:", result["name"])
    print("Moons:", result["moons"])
else:
    print("Planet not found!")

# ----------------------------------------
# 🎮 TRY THIS:
# Search for "Jupiter" (not in list!)
# ----------------------------------------
