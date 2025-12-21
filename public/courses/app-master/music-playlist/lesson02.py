# Project: Music Playlist
# Goal: Manager Class

class Playlist:
    songs = []
    
    def add(self, song):
        self.songs.append(song)
        print("Added:", song)

p = Playlist()
p.add("Song A")
p.add("Song B")
print(p.songs)
