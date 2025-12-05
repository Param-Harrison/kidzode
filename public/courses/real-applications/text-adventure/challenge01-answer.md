# Solution

```python
rooms = {
    "field": {
        "desc": "A grassy field. Paths go West and East.",
        "exits": {"west": "tower1", "east": "tower2"}
    },
    "tower1": {
        "desc": "The Silver Tower. Path leads East.",
        "exits": {"east": "field"}
    },
    "tower2": {
        "desc": "The Gold Tower. Path leads West.",
        "exits": {"west": "field"}
    }
}

current = "field"

while True:
    print(f"\n{rooms[current]['desc']}")
    cmd = input("> ").lower()
    
    if cmd == "quit":
        break
        
    if cmd in rooms[current]["exits"]:
        current = rooms[current]["exits"][cmd]
    else:
        print("Cannot go there.")
```
