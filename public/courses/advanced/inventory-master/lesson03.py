inventory = [{"name": "Sword", "type": "weapon"}, {"name": "Shield", "type": "armor"}, {"name": "Bow", "type": "weapon"}]
weapons = []
for item in inventory:
    if item["type"] == "weapon":
        weapons.append(item["name"])
print("Weapons:", weapons)
