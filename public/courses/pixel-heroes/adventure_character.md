# Add Character Name

Make the story use YOUR name! Press Run, enter your name, and watch it appear throughout the adventure!

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

**The magic:** Variables make stories personal! Use f-strings like `f"{hero_name} does something"` and the name appears everywhere you use the variable. Don't forget the `f` before the quotes!

Try asking for a friend's name too - make it a team adventure!
