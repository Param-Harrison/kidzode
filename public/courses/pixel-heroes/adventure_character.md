# Add Your Character Name

Awesome, Multiple Endings Creator! Your story is exciting!
But wouldn't it be cooler if the story used YOUR name?
Can you make the story personal with a character name?

## 🎯 Today's Mission
Add a character name that appears throughout the story!

## 📚 Before You Start
You know how to use variables and nested `if/else` statements.

## Let's Do It!
1. Read the code - see the name being used!
2. Press the green **Run** button
3. Enter your name and make choices!

```python
print("=== THE HERO'S QUEST ===")
print()

# Get the hero's name
hero_name = input("What is your hero's name? ")

print()
print(f"Welcome, {hero_name}!")
print(f"{hero_name} stands before a mysterious cave.")
print()

choice1 = input(f"Does {hero_name} ENTER the cave or CAMP outside? ")

if choice1 == "enter":
    print()
    print(f"{hero_name} bravely enters the dark cave!")
    print("Inside, there's a glowing crystal and a sleeping monster.")
    print()
    
    choice2 = input(f"Does {hero_name} TAKE the crystal or SNEAK past? ")
    
    if choice2 == "take":
        print()
        print(f"{hero_name} grabs the crystal!")
        print("The monster wakes up but is friendly!")
        print(f"The monster thanks {hero_name} for freeing it!")
        print("VICTORY!")
    else:
        print()
        print(f"{hero_name} sneaks past carefully...")
        print("You find a secret exit with treasure!")
        print(f"{hero_name} is rich!")
        print("SUCCESS!")
else:
    print()
    print(f"{hero_name} decides to camp outside.")
    print("During the night, a wise wizard visits!")
    print(f"The wizard teaches {hero_name} magic!")
    print("MAGICAL VICTORY!")
```

## ✨ Magic Moment
The story feels personal - it's about YOU!

## 💡 Important Things to Remember
- Variables make stories more personal
- Use f-strings to put the name in the story: `f"{hero_name} does something"`
- The name appears everywhere you use the variable
- This is how real video games remember your character!

## 🎨 Try This Next!
Ask for a friend's name too and add them to the story!

## 🤔 Stuck? Check This!
- **Name not showing?** Make sure you're using `{hero_name}` inside f-strings
- **Forgot the f?** f-strings need `f` before the opening quote
- **Want more personalization?** Ask for their favorite color or animal!

## 🌟 Show Your Parents!
"Look! My story uses my name - it's like I'm really in the adventure!"

You just unlocked the **Personal Story Creator** superpower! ⭐
