# Play Next ▶️

Let's "play" the first song and remove it.
Queue style!

### The Logic
`pop(0)` removes the first item.

```python
def play_next(self):
    song = self.songs.pop(0)
    print("Playing:", song.title)
```

### Your Goal
1. Define `Playlist` with `songs = ["A", "B"]`.
2. Add `play()` method.
3. It pops index 0 and prints it.
4. Call `play()` twice.

### Achievement
▶️ **Streamer**: You built a music queue!
