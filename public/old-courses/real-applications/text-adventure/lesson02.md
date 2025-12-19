# The Loop 🔁

A game never ends until you say so.
We need a `while True` loop!

```python
while True:
    cmd = input("> ")
    
    if cmd == "quit":
        print("Bye!")
        break
    elif cmd == "look":
        print("You see trees.")
    else:
        print("I don't understand.")
```

This is the heartbeat of every game engine (even Fortnite!).

## Try This!
Add a `dance` command that prints "You do a jig!".
