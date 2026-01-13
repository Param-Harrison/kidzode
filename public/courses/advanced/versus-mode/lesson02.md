# The Combat Loop ⚔️

## Quick Reminder
You built character cards for our heroes. Now, it's time to make them fight!

## Your Mission
A battle isn't just one hit—it's a loop! We need to keep the fight going until someone's health drops to **0**.

## How Damage Works
When the Hero attacks the Villain, we subtract the Hero's `attack` power from the Villain's `health`. 

```python
# The Hero strikes!
villain["health"] = villain["health"] - hero["attack"]

# Check if the Villain is defeated
if villain["health"] <= 0:
    print("VICTORY! The Villain has fallen! 🏆")
```

## The "Until Done" Loop
We use a **while loop** (which you'll learn more about soon) to keep the battle going:
```python
while hero["health"] > 0 and villain["health"] > 0:
    # Fight logic goes here!
```

## Try It!
1. Run the battle simulator.
2. Click **Run** and watch the health bars drop in the console.
3. **Challenge:** Give the Villain a massive health boost (like `500`). Can the Hero still win?

## What You Learned
✅ Damage is just simple **Subtraction** on a dictionary value.
✅ An **if statement** checks who is still standing.
✅ Battles are just loops that run until a condition (Health > 0) is false.

## Achievement Unlocked! 🏆
**Battle Engineer**: You just built the core logic for a combat system! 🤺
