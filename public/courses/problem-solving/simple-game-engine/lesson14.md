# Game State

Is the game running? Paused? Over?
We use a variable to track the **State**.

```python
state = "MENU"

if state == "MENU":
    print("1. Start Game")
    print("2. Quit")
elif state == "PLAYING":
    print("Fight!")
elif state == "GAME_OVER":
    print("Try again?")
```

You'll see:
```
1. Start Game
2. Quit
```

This controls what the player sees!

## Try This!
Change `state` to "PLAYING" to start the fight!
