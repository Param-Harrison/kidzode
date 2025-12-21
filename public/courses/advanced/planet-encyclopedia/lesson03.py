# 🪐 PLANET ENCYCLOPEDIA
# Goal: Scan the galaxy

galaxy = [
    {"name": "Mars", "type": "Rocky"},
    {"name": "Jupiter", "type": "Gas Giant"},
    {"name": "Saturn", "type": "Gas Giant"}
]

# 1. Loop through the galaxy list
print("--- STARTING SCAN ---")
for planet in galaxy:
    # 2. Print the name of the current planet
    print("Scanning:", planet["name"])

print("--- SCAN COMPLETE ---")
