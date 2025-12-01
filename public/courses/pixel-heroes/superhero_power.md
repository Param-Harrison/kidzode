# Add a Superpower

Excellent, Hero Namer! Your superhero has a name!
But every superhero needs a SUPERPOWER!
Can you add a random power to your hero?

## 🎯 Today's Mission
Add a random superpower to your superhero!

## 📚 Before You Start
You know how to use `random.choice()` with multiple lists.

## Let's Do It!
1. Read the code - see the third list for powers!
2. Press the green **Run** button
3. See your hero's name AND power!

```python
import random

# Lists of superhero parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon"]
powers = [
    "can fly at supersonic speed",
    "has super strength",
    "can become invisible",
    "controls fire and ice",
    "reads minds"
]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)

# Create the superhero
superhero_name = adj + " " + noun

print("=== SUPERHERO GENERATOR ===")
print()
print(f"Name: {superhero_name}")
print(f"Power: {power}")
print()
print(f"{superhero_name} {power}!")
```

## ✨ Magic Moment
Your superhero now has a name AND a superpower!

## 💡 Important Things to Remember
- You can use as many lists as you need
- Each `random.choice()` picks independently
- You can pick from the same list multiple times
- The combinations make each hero unique!

## 🎨 Try This Next!
Add more powers! Try "shoots laser beams" or "talks to animals"!

## 🤔 Stuck? Check This!
- **Powers too long?** That's okay! Powers can be full sentences
- **Want shorter powers?** Use words like "Flight" or "Strength"
- **Same combo every time?** Keep running - you'll see different ones!

## 🌟 Show Your Parents!
"Look! My superhero generator creates heroes with powers!"

You just unlocked the **Power Granter** superpower! ⭐
