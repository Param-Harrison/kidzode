# Meaningful Files

Dictionaries are okay, but **Classes** are better.
A File has a `name` and `content`.

```python
class File:
    def __init__(self, name, content):
        self.name = name
        self.content = content
    
    def read(self):
        return self.content

# Create a file
my_file = File("hello.txt", "Hello World!")

print(f"File: {my_file.name}")
print(f"Body: {my_file.read()}")
```

You'll see:
```
File: hello.txt
Body: Hello World!
```

Much cleaner than a raw string!

## Try This!
Create a file "secrets.txt" with content "I love Python" and read it!
