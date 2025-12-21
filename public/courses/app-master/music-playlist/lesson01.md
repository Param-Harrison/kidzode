# Welcome to Music Playlist! 🎶
Turn up the volume! Let's build a smart music player that can organize your favorite tracks and play them in the perfect order!

## Song Objects 🎵

A playlist isn't just a list of strings "Song.mp3".
It is a list of Song OBJECTS (Title, Artist, Duration).

### The Code
```python
class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist

s = Song("Hello", "Adele")
```

### Your Goal
1. Define class `Track` with `title` and `duration`.
2. Create `t1` ("Happy", 3).
3. Create `t2` ("Sad", 4).
4. Print the title of t1.

### Practical Use
Spotify stores massive amounts of metadata (Album Art, Year, Genre) for every song file.
