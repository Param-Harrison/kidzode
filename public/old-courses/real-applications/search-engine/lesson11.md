# Organizing Code

Let's wrap our logic in a class `SearchEngine`.
It needs an `add(doc)` and `search(query)`.

```python
class SearchEngine:
    def __init__(self):
        self.index = {}
    
    def add(self, doc_id, text):
        # Tokenize and index (Lesson 3 logic)
        for word in text.lower().split():
            if word not in self.index:
                self.index[word] = set()
            self.index[word].add(doc_id)
    
    def search(self, query):
        return self.index.get(query.lower(), set())

se = SearchEngine()
se.add(1, "Python is cool")
print(se.search("Python"))
```

Clean and reusable! 🏗️

## Try This!
Add a `remove(doc_id)` method! (Harder than it looks!)
