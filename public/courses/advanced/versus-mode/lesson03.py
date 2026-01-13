hero = {"name": "Hero", "hp": 100, "attack": 25}

def power_up(character):
    character["attack"] = character["attack"] + 10
    print(character["name"], "powered up! ATK is now", character["attack"])

print("Before:", hero["attack"])
power_up(hero)
print("After:", hero["attack"])
