# Appending Data

We often want to add to the end, not delete everything.
This is **Appending**.

```python
class File:
    def __init__(self, name, content=""):
        self.name = name
        self.content = content
    
    def append(self, new_data):
        self.content += new_data # Add to end

f = File("log.txt", "Start\n")
f.append("Error 1\n")
f.append("End")

print(f.content)
```

You'll see:
```
Start
Error 1
End
```

We built a logger! 📝

## Try This!
Create a shopping list file and append 3 items to it!
