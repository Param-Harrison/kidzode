# Editing Files

Files aren't read-only. We need to **Write** to them.
Let's add a `write` method.

```python
class File:
    def __init__(self, name, content=""):
        self.name = name
        self.content = content # Default empty
    
    def read(self):
        return self.content
    
    def write(self, new_data):
        self.content = new_data
        print(f"Saved {len(new_data)} bytes to {self.name}")

f = File("notes.txt")
f.write("Buy milk")
print(f.read())
```

You'll see:
```
Saved 8 bytes to notes.txt
Buy milk
```

We are simulating a real hard drive! 💾

## Try This!
Write "Buy cookies" to the file instead!
