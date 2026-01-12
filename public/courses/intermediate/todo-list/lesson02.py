# ========================================
# 🔄 LESSON 2: The Main Menu Loop
# ========================================

def show_menu():
    print("")
    print("1. Say Hello")
    print("2. Say Goodbye")
    print("3. Exit")

# while True runs forever... until we break out!
while True:
    # Show the menu each time
    show_menu()
    
    # Get the user's choice
    choice = input("Pick a number: ")
    
    # Check what they picked
    if choice == "1":
        print("Hello there! 👋")
    elif choice == "2":
        print("Goodbye for now! 👋")
    elif choice == "3":
        print("Exiting app...")
        break  # This stops the loop!
    else:
        print("I don't understand. Try 1, 2, or 3.")

# ----------------------------------------
# 🎮 TRY THIS:
# Add choice "4" that tells a joke!
# ----------------------------------------
