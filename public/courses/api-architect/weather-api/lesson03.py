# ☁️ API ARCHITECT
# Goal: Filter Warm Days

report = {
  "city": "Miami",
  "days": [
    {"name": "Mon", "deg": 28},
    {"name": "Tue", "deg": 18},
    {"name": "Wed", "deg": 30}
  ]
}

print("Searching for beach days in", report["city"])

# 1. Loop through days
for d in report["days"]:
    # 2. Check temperature
    if d["deg"] > 25:
        print("It's hot on", d["name"])
