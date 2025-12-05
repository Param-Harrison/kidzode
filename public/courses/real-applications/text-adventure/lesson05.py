rooms = {
    "hall": {"desc": "Hallway", "exits": {"north": "kitchen"}},
    "kitchen": {"desc": "Kitchen", "exits": {"south": "hall"}}
}

current = "hall"

while True:
    print(f"\n--- {rooms[current]['desc']} ---")
    cmd = input("Go where? ").lower()
    
    if cmd == "quit":
        break
        
    if cmd in rooms[current]["exits"]:
        current = rooms[current]["exits"][cmd]
    else:
        print("Bonk! Value Wall.")
