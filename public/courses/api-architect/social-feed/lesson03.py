# ☁️ API ARCHITECT: CASE 006
# Goal: hashtag Search

db = [
  {"msg": "Look at my drawing #art"},
  {"msg": "Python loops #tech"},
  {"msg": "Painting is fun #art"}
]

search = "#art"

# 1. Loop through db
for item in db:
    # 2. Check for tag
    if search in item["msg"]:
        print("Found:", item["msg"])
