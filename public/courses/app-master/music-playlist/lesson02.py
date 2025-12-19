# 🏗️ APP MASTER: CASE 005
# Goal: Song Manager

class Album:
    def __init__(self):
        # 1. Create storage list
        self.tracks = []

    def add(self, name):
        self.tracks.append(name)

my_album = Album()
my_album.add("Track 1")
my_album.add("Track 2")

print(my_album.tracks)
