# Create a Superhero Logo

Amazing, Power Granter! Your superhero has a name and power!
But every superhero needs a cool LOGO!
Can you create an ASCII art logo for your hero?

## 🎯 Today's Mission
Add an ASCII art logo to your superhero profile!

## 📚 Before You Start
You know how to create strings and use multiple lists with random.choice().

## Let's Do It!
1. Read the code - see the triple quotes for multi-line text!
2. Press the green **Run** button
3. See your hero's complete profile with logo!

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

# Create the logo (ASCII art)
logo = """
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
    ⭐             ⭐
    ⭐   HERO!     ⭐
    ⭐             ⭐
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
"""

print("=== SUPERHERO PROFILE ===")
print(logo)
print(f"Name: {superhero_name}")
print(f"Power: {power}")
print()
print(f"Beware villains! {superhero_name} {power}!")
```

## ✨ Magic Moment
Your superhero has a complete profile with a cool logo!

## 💡 Important Things to Remember
- Triple quotes `"""` let you write multi-line text
- ASCII art uses regular keyboard characters to make pictures
- The logo stays the same, but the name and power change
- You can create any design you want!

## 🎨 Try This Next!
Design your own logo! Use different characters like `#`, `*`, `=`, or `+`!

## 🤔 Stuck? Check This!
- **Logo looks weird?** Make sure you have the same number of characters on each line
- **Quotes error?** Make sure you use THREE quotes: `"""`
- **Want a different logo?** Change the characters inside the triple quotes!

## 🌟 Show Your Parents!
"Look! My superhero has a complete profile with a logo!"

You just unlocked the **Logo Designer** superpower! ⭐
