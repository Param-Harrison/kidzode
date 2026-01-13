# Ultimate Power-Ups 🧪

## Quick Reminder
The battle is intense! But sometimes, a hero needs a little help. 

## Your Mission
We've dropped a **Power-Up Crate** into the arena. If the hero picks it up, their health should go back to 100 and their attack should double!

## Modifying the Shelf
Updating a stat is easy. You just assign a new value to the key:

```python
# Full Heal!
hero["health"] = 100

# Double Attack!
hero["attack"] = hero["attack"] * 2
```

## Team Buffs
What if we have a whole team of heroes? We can loop through a **list of dictionaries** and buff everyone at once:

```python
for hero in team:
    hero["health"] = 100
    print(hero["name"], "is fully healed! ✨")
```

## Try It!
1. Look at the `team` list.
2. Click **Run** to see the mass-healing spell in action.
3. **Challenge:** Can you give everyone a +10 attack boost instead of healing them?

## What You Learned
✅ You can **Update** dictionary values at any time.
✅ Loops let you apply changes to many characters at once.
✅ This is how "Area of Effect" (AoE) spells work in RPG games! 🪄

## Pro Tip
Always print a message when a stat changes (like "Attack Up!") so the player knows something cool happened! 📣
