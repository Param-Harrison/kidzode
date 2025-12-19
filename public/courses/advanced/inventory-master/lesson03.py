# 🎒 INVENTORY MASTER: CASE 005
# Goal: Filter the food

backpack = [
    {"name": "Apple", "type": "Food"},
    {"name": "Rock", "type": "Junk"},
    {"name": "Dagger", "type": "Weapon"},
    {"name": "Bread", "type": "Food"}
]

my_food = []

# 1. Loop through backpack
for item in backpack:
    # 2. Check if type is Food
    if item["type"] == "Food":
        # 3. Append to my_food
        my_food.append(item)
        print("Moved to food bag:", item["name"])

# 4. Print the result
print("--- FOOD BAG ---")
print(my_food)
