# The Gear Filter 🛡️

## Quick Reminder
You used the `in` shortcut to find one specific item. But what if we want to find **ALL** the weapons?

## Your Mission
Sir Codes-A-Lot has picked up a lot of junk! 📦 We need to clean out his inventory and only keep the items that are actually **Weapons**.

## The Filter Pattern
To filter a list, we create a new, empty list and only add the items we want to keep. It's like pouring a bucket of rocks and gold through a sifter!

```python
all_items = ["Sword", "Bread", "Shield", "Apple", "Axe"]
weapons = []

for item in all_items:
    if "Sword" in item or "Axe" in item or "Shield" in item:
        weapons.append(item)
```

## Try It!
1. Look at the `all_items` list.
2. Click **Run** to see the "Filter" in action.
3. **Challenge:** Can you add "Bow" to the `weapons` filter?

## What You Learned
✅ **Filtering** means creating a smaller list from a bigger one.
✅ You use a **for loop** to look at everything and an **if statement** to decide what to keep.
✅ **`.append()`** adds the "winners" to your new list.

## Achievement Unlocked! 🏆
**Loot Master**: You successfully automated the boring part of sorting inventory! 💰
