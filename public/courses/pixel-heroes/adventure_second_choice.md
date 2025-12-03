# Add a Second Choice

Add a second decision to make the story longer!

## What to Do
1. Press Run
2. Make TWO choices!

```python
print("=== THE MYSTERIOUS FOREST ===")
print()
print("You are standing at the edge of a dark forest.")
print("There are two paths ahead of you.")
print()

choice1 = input("Do you go LEFT or RIGHT? ")

if choice1 == "left":
    print()
    print("You chose the left path!")
    print("You find a mysterious door.")
    print()
    
    choice2 = input("Do you OPEN the door or WALK AWAY? ")
    
    if choice2 == "open":
        print()
        print("You opened the door!")
        print("Inside is a treasure chest full of gold!")
        print("YOU WIN!")
    else:
        print()
        print("You walked away from the door.")
        print("You find a magic sword instead!")
        print("YOU WIN!")
else:
    print()
    print("You chose the right path!")
    print("You meet a friendly dragon!")
    print("The dragon gives you a ride home!")
    print("YOU WIN!")
```

## Remember
- You can put `if/else` INSIDE another `if/else`
- This is called "nesting"
- Indentation shows which choice belongs where

## Try This
Add a second choice to the right path too!

## If Stuck
- Inner `if` must be indented (4 spaces)
- Second choice only happens if you go left first

You did it! ⭐
