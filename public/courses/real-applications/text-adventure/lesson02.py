print("Type 'quit' to exit.")

while True:
    command = input("COMMAND > ").lower().strip()
    
    if command == "quit":
        break
    elif command == "dance":
        print("💃 You dance wildly!")
    else:
        print("Unknown command.")
