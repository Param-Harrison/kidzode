# The Arena 🏟️

## Your Mission
Welcome to the Kidzode Battle Arena! ⚔️ Two legendary heroes are about to face off. Your job is to build the character stats that the game engine uses to run the fight. If the stats are wrong, the game crashes—and we can't have that!

## Character Cards
A character is more than just a name. They have **Health**, **Attack Power**, and **Defense**. We store this on a "Character Card" (a Dictionary):

```python
hero = {
    "name": "Sir Codes-A-Lot",
    "health": 100,
    "attack": 15,
    "defense": 5
}
```

## Reading the Stats
To see how strong a hero is, we just pull the info from the shelf:
```python
print(hero["name"], "enters the ring with", hero["health"], "HP!")
```

## Try It!
1. Check the `hero` and `villain` dictionaries.
2. Click **Run** to see their stats.
3. **Challenge:** Increase the hero's `attack` to `50`. Now that’s a power-up! ⚡

## What You Learned
✅ Game characters are usually stored as **Dictionaries**.
✅ Each "Key" (like "health") represents a different stat.
✅ You can change these stats mid-game to show damage or level-ups!

## Fun Fact
In games like *League of Legends* or *Pokémon*, every single character has a dictionary like this with hundreds of hidden stats! 👾
