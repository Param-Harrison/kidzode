### Solution

```python
class Song:
    def __init__(self, dur):
        self.duration = dur

class Playlist:
    def __init__(self):
        self.songs = []

    def add(self, s):
        self.songs.append(s)
    
    def total_time(self):
        t = 0
        for s in self.songs:
            t += s.duration
        return t

p = Playlist()
p.add(Song(3))
p.add(Song(4))
print(p.total_time())
```
