# Saving Progress 💾

Users hate losing progress.
We can serialize our entire World State to JSON.

`state = {"current_room": "hall", "inventory": ["sword"], "hp": 50}`

```python
import json

def save_game(player, room_name):
    data = {"room": room_name, "bag": player.inventory}
    with open("save.json", "w") as f:
        json.dump(data, f)
    print("Game Saved.")

def load_game():
    with open("save.json", "r") as f:
        return json.load(f)
```

Persistence is powerful!

## Try This!
Save your current position and reload it.
