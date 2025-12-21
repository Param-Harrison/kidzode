# ☁️ API ARCHITECT
# Goal: Access nested data

player = {
  "id": "p1",
  "location": {
    "x": 100,
    "y": 250,
    "map": "Desert"
  }
}

# Access the X coordinate
# We use two brackets [][]
x_pos = player["location"]["x"]

print("Player X:", x_pos)
