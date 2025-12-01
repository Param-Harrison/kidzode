# Add a Second Choice

Excellent, Story Writer! Your first story works great!
But real adventures have MORE than one choice!
Can you add a second decision to make the story longer?

## 🎯 Today's Mission
Add a second choice that happens after the first one!

## 📚 Before You Start
You know how to use `if/else` to create different story paths.

## Let's Do It!
1. Read the code - see the second choice!
2. Press the green **Run** button
3. Make TWO choices to see how the story unfolds!

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

## ✨ Magic Moment
Your story now has multiple layers of choices!

## 💡 Important Things to Remember
- You can put `if/else` INSIDE another `if/else`
- This is called "nesting"
- Each choice leads to more choices!
- The indentation (spaces) shows which choice belongs where

## 🎨 Try This Next!
Add a second choice to the right path too!

## 🤔 Stuck? Check This!
- **Indentation error?** Make sure the inner `if` is indented (4 spaces)
- **Second choice not showing?** Check you're inside the first `if` block
- **Confused?** The second choice only happens if you go left first

## 🌟 Show Your Parents!
"Look! My story has choices inside choices - it's getting complex!"

You just unlocked the **Branching Story Master** superpower! ⭐
