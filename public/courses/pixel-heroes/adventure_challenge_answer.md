# Answer

Here's a complete solution example:

```python
print("=== THE MAGICAL QUEST ===")
print()

# Get character info
hero_name = input("What is your character's name? ")

print()
print(f"Welcome to the adventure, {hero_name}!")
print(f"{hero_name} stands at a crossroads in a magical forest.")
print()

choice1 = input("Do you go LEFT into the dark woods or RIGHT toward the castle? ")

if choice1 == "left":
    print(f"{hero_name} bravely enters the dark woods!")
    print("You find a glowing crystal.")
    choice2 = input("Do you PICK UP the crystal or LEAVE it? ")
    if choice2 == "pick up":
        print(f"{hero_name} picks up the crystal!")
        print("It glows brighter and grants you magic powers!")
        print("HAPPY ENDING - You're now a wizard!")
    else:
        print(f"{hero_name} leaves the crystal behind.")
        print("A friendly fairy appears and guides you home.")
        print("PEACEFUL ENDING - Safe return!")
else:
    print(f"{hero_name} heads toward the castle!")
    print("You meet a dragon at the gate.")
    choice3 = input("Do you FIGHT the dragon or TALK to it? ")
    if choice3 == "fight":
        print(f"{hero_name} fights bravely!")
        print("The dragon respects your courage and becomes your friend!")
        print("EPIC ENDING - Dragon companion!")
    else:
        print(f"{hero_name} talks to the dragon.")
        print("The dragon was lonely and is now your friend!")
        print("FRIENDSHIP ENDING - New friend made!")

print()
print("THE END!")
```

**Remember:** Try solving it yourself first! Understanding how nested if/else works is more important than just copying the answer. Create your own unique story!

