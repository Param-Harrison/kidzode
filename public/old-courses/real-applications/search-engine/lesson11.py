class SearchEngine:
    def __init__(self):
        self.index = {}
    
    def add(self, doc_id, text):
        for word in text.lower().split():
            if word not in self.index:
                self.index[word] = set()
            self.index[word].add(doc_id)
    
    def search(self, query):
        return self.index.get(query.lower(), set())

se = SearchEngine()
se.add(1, "Python is cool")
print(f"Found in: {se.search('Python')}")
