# ⚔️ VERSUS MODE
# Goal: Check if a hit lands

p1 = {"name": "Hero", "atk": 20, "def": 5}
p2 = {"name": "Boss", "atk": 50, "def": 10}

print("Hero attacks Boss...")

# 1. Check if p1 attack > p2 defense
if p1["atk"] > p2["def"]:
    print("KAPOW! A direct hit!")
else:
    print("Clang! The attack was blocked.")
