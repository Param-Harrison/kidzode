# Game Loop

Games run forever until you quit.
We use `while True` for this!

```python
while True:
    action = "play" # Simulate input
    
    if action == "quit":
        print("Game Over!")
        break
    
    print("Playing...")
    break # Remove this line to loop forever!
```

**Warning:** Be careful with infinite loops! Always have a `break`.

## Try This!
Ask the user for input: `action = input("Command: ")`
