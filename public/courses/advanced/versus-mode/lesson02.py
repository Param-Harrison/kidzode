hero = {"name": "Hero", "hp": 100, "attack": 25}
enemy = {"name": "Goblin", "hp": 50, "attack": 10}

# Hero attacks!
enemy["hp"] = enemy["hp"] - hero["attack"]
print(hero["name"], "attacks for", hero["attack"], "damage!")
print(enemy["name"], "has", enemy["hp"], "HP left!")

# Check if defeated
if enemy["hp"] <= 0:
    print(enemy["name"], "is defeated! 🎉")
