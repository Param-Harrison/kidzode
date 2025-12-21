### Solution

```python
import random

class Playlist:
    songs = []
    
    def mix(self):
        random.shuffle(self.songs)

p = Playlist()
p.songs = [1, 2, 3, 4, 5]

p.mix()
print(p.songs)
```
