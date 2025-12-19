# 🎒 INVENTORY MASTER: CASE 005
# Goal: Search for food

backpack = [
    {"name": "Rock", "type": "Junk"},
    {"name": "Apple", "type": "Food"},
    {"name": "Stick", "type": "Junk"}
]

# 1. Loop through items
print("Searching for snacks...")
for item in backpack:
    # 2. Check if type is Food
    if item["type"] == "Food":
        print("Found:", item["name"])

print("Search complete.")
