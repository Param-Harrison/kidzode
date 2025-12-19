# Visualizing the World

Text games sometimes have "Roguelike" maps.
We use characters to represent the room.

```python
# 0 = Empty, 1 = Wall, P = Player
grid = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, "P", 0, 1],
    [1, 1, 1, 1, 1]
]

for row in grid:
    print(" ".join(str(c) for c in row))
```

It looks like a mini room! 🗺️

## Try This!
Move the "P" around the grid by changing coordinates!
