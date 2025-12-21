# Project: Music Playlist
# Goal: Song Class

class Song:
    def __init__(self, title):
        self.title = title
        self.likes = 0
    
    def like(self):
        self.likes += 1

s = Song("Despacito")
s.like()
print(s.title, "has", s.likes, "likes")
