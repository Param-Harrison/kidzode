inventory = ["Sword", "Shield", "Potion"]
item = input("Check for item: ")
if item in inventory:
    print("✅ You have it!")
else:
    print("❌ Not in inventory")
