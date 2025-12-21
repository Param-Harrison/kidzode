# The Playlist Class 📂

A **Manager Class** controls the list.
It has methods like `add_song` and `show_songs`.
It keeps the `songs = []` list hidden inside.

### The Code
```python
class Jukebox:
    def __init__(self):
        self.songs = []

    def add(self, song):
        self.songs.append(song)
```

### Your Goal
1. Define `Playlist`. Init `self.catalog = []`.
2. Add `add_track(title)`. Append title to catalog.
3. Create playlist `my_mix`.
4. Add "Track 1" and "Track 2".
5. Print `my_mix.catalog`.

### Practical Use
This Pattern (Manager + Data Objects) is the standard structure for almost any application.
