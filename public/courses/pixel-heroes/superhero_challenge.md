# Complete Superhero Profile Challenge

Perfect, Logo Designer! Your superhero looks amazing!
But every superhero has a WEAKNESS too!
Can you create a complete superhero profile with everything?

## 🎯 Today's Mission
Add a weakness and create the ultimate superhero profile!

## 📚 Before You Start
You know how to use multiple lists and multi-line strings.

## Your Challenge!
1. Add a list of weaknesses
2. Pick a random weakness
3. Display the complete profile with name, power, weakness, and logo!

```python
import random

# Lists of superhero parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic", "Blazing"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon", "Storm"]
powers = [
    "can fly at supersonic speed",
    "has super strength",
    "can become invisible",
    "controls fire and ice",
    "reads minds",
    "shoots energy blasts"
]

# YOUR TURN! Add a weaknesses list
# HINT: weaknesses = ["water", "loud noises", "chocolate", ...]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)
# YOUR TURN! Pick a random weakness
# HINT: weakness = random.choice(weaknesses)

# Create the superhero
superhero_name = adj + " " + noun

# Create the logo
logo = """
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
    ⭐             ⭐
    ⭐   HERO!     ⭐
    ⭐             ⭐
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
"""

print("=== COMPLETE SUPERHERO PROFILE ===")
print(logo)
print(f"Name: {superhero_name}")
print(f"Power: {power}")
# YOUR TURN! Print the weakness
# HINT: print(f"Weakness: {weakness}")
print()
print(f"{superhero_name} is here to save the day!")
```

## ✨ Magic Moment
A complete superhero profile with name, power, weakness, and logo!

## 💡 Important Things to Remember
- Every good superhero has a weakness (even Superman has kryptonite!)
- You can have as many lists as you need
- Each `random.choice()` is independent
- The combinations create unique characters every time!

## 🎨 Try This Next!
- Add a "sidekick" with their own random name
- Add a "nemesis" (villain) generator
- Add a "catchphrase" list
- Let the user choose to generate hero or villain!

## 🤔 Stuck? Check This!
- **Weakness not showing?** Make sure you created the `weaknesses` list
- **Error: weakness not defined?** Check that you have `weakness = random.choice(weaknesses)`
- **Want funny weaknesses?** Try "tickling", "bad jokes", or "vegetables"!

## 🌟 Show Your Parents!
"Look! I created a complete superhero generator with powers AND weaknesses!"

You just unlocked the **Character Creator** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 6! 🎉
