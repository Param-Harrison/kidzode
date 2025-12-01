# Generate Your Superhero Name

Welcome, Custom Launch Director! You've mastered countdowns!
Now it's time to create something FUN - a superhero name generator!
Can you make Python create random superhero names?

## 🎯 Today's Mission
Generate a random superhero name by combining an adjective and a noun!

## Let's Do It!
1. Read the code - see the two lists being combined!
2. Press the green **Run** button
3. Run it again and again for different names!

```python
import random

# Lists of superhero name parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon"]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)

# Combine them!
superhero_name = adj + " " + noun

print("=== SUPERHERO NAME GENERATOR ===")
print()
print(f"Your superhero name is: {superhero_name}!")
```

## ✨ Magic Moment
A random superhero name appears - run it again for a different one!

## 💡 Important Things to Remember
- You can have multiple lists in one program
- `random.choice()` works with any list
- `adj + " " + noun` glues words together with a space
- Each time you run it, you might get a different combination!

## 🎨 Try This Next!
Add your own words to the lists! Try "Blazing" or "Cosmic" or "Ninja"!

## 🤔 Stuck? Check This!
- **Same name every time?** That's just luck - keep running it!
- **Error: random not defined?** Make sure you have `import random` at the top
- **No space between words?** Check that you have `" "` between the words

## 🌟 Show Your Parents!
"Look! I made a superhero name generator - it creates random hero names!"

You just unlocked the **Hero Namer** superpower! ⭐
