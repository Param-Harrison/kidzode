# Turn-Based Actions

Games take turns. You go, then I go.

```python
turn = "Player"

while True:
    if turn == "Player":
        print("Your turn! Attack!")
        turn = "Enemy" # Switch turn
    else:
        print("Enemy attacks you!")
        turn = "Player" # Switch back
    
    # Stop for now so it doesn't run forever
    break 
```

You'll see:
```
Your turn! Attack!
```

We use a variable to remember whose turn it is!

## Try This!
Add a `round` counter to track how many turns pass!
