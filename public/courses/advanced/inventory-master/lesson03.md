# Powerful Upgrades ✨

## Quick Reminder
You learned how to filter for categories like "Weapons." Now, let's get even smarter.

## Your Mission
Not all weapons are created equal. Some weapons are **Broken** and some are **Legendary**. 🌟 We need to find only the weapons that have a Power Level of **100 or more**.

## Multiple Conditions
We can use a list of dictionaries (remember the "Planet Shelves"?) to store the details:

```python
inventory = [
    {"name": "Old Sword", "power": 10},
    {"name": "Golden Axe", "power": 150},
    {"name": "Broken Shield", "power": 5}
]

strong_items = []

for item in inventory:
    if item["power"] >= 100:
        strong_items.append(item["name"])
```

## Try It!
1. Check the `inventory` with power levels.
2. Click **Run** to find the legendary gear.
3. **Challenge:** Add a new item called "Dragon Bow" with a power of `200`. Does it show up in the strong list?

## What You Learned
✅ You can filter based on **numbers** (like power level) not just names.
✅ Computers are great at scanning thousands of items in a split second.
✅ This is how game menus show you "Best Attack Items" first!

## Pro Tip
Professional game developers call this **Dynamic Inventory**. The list changes automatically as you get stronger! ⚔️
