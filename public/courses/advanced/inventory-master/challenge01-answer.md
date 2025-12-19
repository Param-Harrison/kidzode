### One way to solve it:

```python
loot = [
    {"name": "Bow", "type": "Weapon"},
    {"name": "Arrow", "type": "Ammo"},
    {"name": "Axe", "type": "Weapon"}
]

weapons = []

for item in loot:
    if item["type"] == "Weapon":
        weapons.append(item)

print("Weapons:", weapons)
```
