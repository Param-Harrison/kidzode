def show_menu():
    print("\n1. Hello\n2. Goodbye\n3. Exit")

while True:
    show_menu()
    choice = input("Pick a number: ")

    if choice == "1":
        print("Hello there!")
    elif choice == "2":
        print("Goodbye for now!")
    elif choice == "3":
        print("Exiting app...")
        # break stops the loop immediately
        break
    else:
        print("Invalid choice, try again!")

# TRY THIS: Add a choice '4' that prints a joke!
