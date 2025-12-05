# Solution

```python
import string

class MiniGoogle:
    def __init__(self):
        self.index = {}
        self.documents = {}

    def add(self, doc_id, text):
        self.documents[doc_id] = text
        # Clean & Index
        clean = text.translate(str.maketrans('', '', string.punctuation))
        for word in clean.lower().split():
            if word not in self.index:
                self.index[word] = set()
            self.index[word].add(doc_id)

    def search(self, query):
        query = query.lower()
        results = self.index.get(query, set())
        
        for doc_id in results:
            text = self.documents[doc_id]
            
            # Simple Snippet
            idx = text.lower().find(query)
            if idx != -1:
                start = max(0, idx - 10)
                end = min(len(text), idx + 10 + len(query))
                snippet = text[start:end]
                
                # Highlight (simple case)
                snippet = snippet.lower().replace(query, f"**{query}**")
                print(f"Doc {doc_id}: ...{snippet}...")

engine = MiniGoogle()
engine.add(1, "Python is great.")
engine.add(2, "I love Java.")

engine.search("python")
```
Output:
```
Doc 1: ...**python** is great...
```
