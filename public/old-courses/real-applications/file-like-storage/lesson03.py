class File:
    def __init__(self, name, content=""):
        self.name = name
        self.content = content
    
    def read(self):
        return self.content
    
    def write(self, new_data):
        self.content = new_data
        print(f"Saved {len(new_data)} bytes to {self.name}")

f = File("notes.txt")
f.write("Buy milk")
print(f.read())
