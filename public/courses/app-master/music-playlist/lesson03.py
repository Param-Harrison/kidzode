# Project: Music Playlist
# Goal: Tracking Index

class Player:
    def __init__(self):
        self.queue = ["Song 1", "Song 2", "Song 3"]
        self.index = 0

    def play(self):
        print("Now Playing:", self.queue[self.index])

    def skip(self):
        self.index += 1

p = Player()
p.play()
p.skip()
p.play()
