import string

class MiniGoogle:
    def __init__(self):
        self.index = {}
        self.documents = {} # Store full text to show snippets
    
    def add(self, doc_id, text):
        self.documents[doc_id] = text
        # Indexing logic...

    def search(self, query):
        # Return docs and snippets...
        pass

# Usage
engine = MiniGoogle()
engine.add(1, "Python is a great language.")
# ...
