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
