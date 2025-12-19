# The Playlist Class 🎧

Now we need a Manager.
A class that holds a LIST of other objects.

### The Structure
```python
class Playlist:
    def __init__(self):
        self.songs = [] # The empty list
    
    def add(self, song):
        self.songs.append(song)
```

### Your Goal
1. Define `class Playlist`.
2. Add `add_song(self, song)` method.
3. Create `p = Playlist()`.
4. Add 2 song objects to it.
5. Print `p.songs`.

### Achievement
🎧 **DJ**: You organized your tracks!
