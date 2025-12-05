# Taking Items (Get)

We need a `Player` class to hold items too.
Command: `get sword`.

1. Check if "sword" is in Room.
2. Remove from Room.
3. Add to Player.

```python
def get_item(player, room, item_name):
    # Find item
    found = None
    for i in room.items:
        if i.name.lower() == item_name:
            found = i
            break
            
    if found:
        room.items.remove(found)
        player.inventory.append(found)
        print("Taken.")
    else:
        print("I don't see that here.")
```

Transfer the data! 📦

## Try This!
Implement `drop sword` (Player -> Room).
