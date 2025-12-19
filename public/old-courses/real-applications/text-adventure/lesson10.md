# You Shall Not Pass 🧙‍♂️

Some exits should be locked.
We can add a `locked` flag to the Room/Exit.
Or check if user has a `Key` item.

```python
if direction == "north" and current_room.name == "Cell":
    if has_item(player, "Key"):
        print("You unlock the door.")
        move("north")
    else:
        print("It's locked. You need a key.")
```

State checking!

## Try This!
Make a "Chest" that needs a key to `open`.
