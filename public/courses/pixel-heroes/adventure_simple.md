# Your First Adventure

Create your own adventure story where YOU choose what happens! Press Run, then type "left" or "right" to make your choice.

```python
print("=== THE MYSTERIOUS FOREST ===")
print()
print("You are standing at the edge of a dark forest.")
print("There are two paths ahead of you.")
print()

choice = input("Do you go LEFT or RIGHT? ")

if choice == "left":
    print()
    print("You chose the left path!")
    print("You find a treasure chest full of gold!")
    print("YOU WIN!")
else:
    print()
    print("You chose the right path!")
    print("You meet a friendly dragon who gives you a ride home!")
    print("YOU WIN!")
```

**How it works:** `if choice == "left":` checks if they typed exactly "left". `else:` handles everything else. `==` checks if two things are the same.

Change the story! Make different paths with different endings - be creative!
