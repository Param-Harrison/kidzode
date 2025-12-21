# ☁️ API ARCHITECT
# Goal: Define Complex Data

# 1. Create nested structure
data = {
  "location": "New York",
  "reports": [
    {"time": "8am", "cond": "Sunny"},
    {"time": "12pm", "cond": "Cloudy"}
  ]
}

# 2. Print parts of it
print("City:", data["location"])
print("Reports:", data["reports"])
