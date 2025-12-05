class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name):
        self.name = name
        self.files = []
    
    def add(self, f):
        self.files.append(f)
    
    def ls(self):
        print(f"--- {self.name} ---")
        for f in self.files:
            print(f"- {f.name}")

d = Directory("Downloads")
d.add(File("game.exe"))
d.add(File("movie.mp4"))

d.ls()
