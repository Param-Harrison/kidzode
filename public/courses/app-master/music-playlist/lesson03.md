# Play Next ⏩

We need to know WHICH song is playing properly.
Use an `index` variable. `0` is first, `1` is second.
Increment it to go next.

### The Code
```python
def __init__(self):
    self.current_index = 0

def play_next(self):
    self.current_index += 1
```

### Your Goal
1. `class Radio` with `index = 0`.
2. `next_song()` adds 1 to index.
3. Create radio. Print index. Call `next_song`. Print index.

### Practical Use
This logic powers the "Skip" button.
