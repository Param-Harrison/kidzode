# Solution

```python
class Note:
    def __init__(self, title, body):
        self.title = title
        self.body = body

class Notebook:
    def __init__(self, name):
        self.name = name
        self.notes = []

    def add_note(self, note):
        self.notes.append(note)

# Usage
book = Notebook("Ideas")
note = Note("Invention", "Toaster that flies")
book.add_note(note)

for n in book.notes:
    print(f"[{n.title}]: {n.body}")
```

Output:
```
[Invention]: Toaster that flies
```
