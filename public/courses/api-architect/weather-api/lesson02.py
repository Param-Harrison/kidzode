# ☁️ API ARCHITECT: CASE 004
# Goal: Dig Deep

api_response = {
  "status": "ok",
  "data": [
    {"id": 1, "val": 100},
    {"id": 2, "val": 200}
  ]
}

# 1. Get the list
items = api_response["data"]

# 2. Get the first item
first_item = items[0]

# 3. Get the value
print("First Value:", first_item["val"])
