# Add Different Endings

Create multiple endings - some good, some bad!

## What to Do
1. Press Run
2. Try different choices to see all endings!

```python
print("=== THE ENCHANTED CASTLE ===")
print()
print("You arrive at a mysterious castle.")
print()

choice1 = input("Do you ENTER the castle or WALK AROUND it? ")

if choice1 == "enter":
    print()
    print("You bravely enter the castle!")
    print("You see stairs going UP and DOWN.")
    print()
    
    choice2 = input("Do you go UP or DOWN? ")
    
    if choice2 == "up":
        print()
        print("You climb the stairs up!")
        print("You find a princess who rewards you with gold!")
        print("HAPPY ENDING!")
    else:
        print()
        print("You go down the dark stairs...")
        print("Oh no! You fell into a trap!")
        print("GAME OVER - Try again!")
else:
    print()
    print("You walk around the castle.")
    print("You find a secret garden with magic flowers!")
    print("The flowers grant you three wishes!")
    print("MAGICAL ENDING!")
```

## Remember
- Not all endings have to be wins!
- Different endings make stories interesting
- Players will try again to see all endings

## Try This
Add a fourth ending!

## If Stuck
- Make sure each path has unique text
- Try all combinations to test

You did it! ⭐
