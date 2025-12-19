# The Move Engine 🏃‍♂️

Let's combine the **Loop** and the **Map**.

```python
current_room = "hall"

while True:
    # 1. Show Room
    room_data = rooms[current_room]
    print(room_data["desc"])
    
    # 2. Get Input
    cmd = input("> ")
    
    # 3. Handle Move
    if cmd in room_data["exits"]:
        current_room = room_data["exits"][cmd] # Update State!
    else:
        print("You can't go that way.")
```

We have a walking simulator! 🚶

## Try This!
Handle "quit" inside the loop too.
