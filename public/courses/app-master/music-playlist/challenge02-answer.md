### Solution

```python
class Song:
    def __init__(self, title):
        self.title = title

class Playlist:
    songs = []
    
    def remove(self, title):
        for s in self.songs:
            if s.title == title:
                self.songs.remove(s)
                break

p = Playlist()
p.songs.append(Song("A"))
p.songs.append(Song("B"))

p.remove("A")
print(len(p.songs)) # Should be 1
```
