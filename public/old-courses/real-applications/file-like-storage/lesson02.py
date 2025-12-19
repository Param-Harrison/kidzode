class File:
    def __init__(self, name, content):
        self.name = name
        self.content = content
    
    def read(self):
        return self.content

my_file = File("hello.txt", "Hello World!")

print(f"File: {my_file.name}")
print(f"Body: {my_file.read()}")
