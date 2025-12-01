# Add Different Story Endings

Perfect, Branching Story Master! Your story has choices!
But every great story needs different ENDINGS!
Can you create multiple endings - some good, some bad?

## 🎯 Today's Mission
Add different endings to your story - not everyone wins!

## 📚 Before You Start
You know how to create nested choices with `if/else`.

## Let's Do It!
1. Read the code - see the different endings!
2. Press the green **Run** button
3. Try different choices to see all the endings!

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

## ✨ Magic Moment
Your story has three different endings - happy, magical, and game over!

## 💡 Important Things to Remember
- Not all endings have to be wins!
- Different endings make the story more interesting
- Players will want to try again to see all endings
- This is how real video games work!

## 🎨 Try This Next!
Add a fourth ending! What if you go up AND find something scary?

## 🤔 Stuck? Check This!
- **All endings the same?** Make sure each path has unique text
- **Want more endings?** Add more choices with more `if/else` blocks
- **Testing?** Try all combinations: enter+up, enter+down, walk around

## 🌟 Show Your Parents!
"Look! My story has multiple endings - you have to play it multiple times!"

You just unlocked the **Multiple Endings Creator** superpower! ⭐
