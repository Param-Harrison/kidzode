# Add Different Endings

Create multiple endings - some good, some bad! Press Run and try different choices to see all the endings!

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

**Fun fact:** Not all endings have to be wins! Different endings make stories interesting - players will try again to see all endings. Mix happy, sad, funny, and scary endings!

Try adding a fourth ending - maybe a secret ending that's super hard to find!
