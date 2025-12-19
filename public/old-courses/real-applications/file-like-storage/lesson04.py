class File:
    def __init__(self, name, content=""):
        self.name = name
        self.content = content
    
    def append(self, new_data):
        self.content += new_data

f = File("log.txt", "Start\n")
f.append("Error 1\n")
f.append("End")

print(f.content)
