# Reset Game

Want to play again?
We need to reset everything to the start.

```python
class Game:
    def __init__(self):
        self.reset()

    def reset(self):
        self.score = 0
        self.level = 1
        print("Game Reset!")

g = Game()
g.score = 500
print(f"Score: {g.score}")

g.reset()
print(f"Score: {g.score}")
```

You'll see:
```
Score: 500
Game Reset!
Score: 0
```

Fresh start!

## Try This!
Add `health` to the reset method!
