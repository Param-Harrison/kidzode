# Solution

```python
import string

def create_index(documents):
    index = {}
    stop_words = ["the", "is", "a"]
    
    for doc_id, text in enumerate(documents):
        # Clean
        clean_text = text.translate(str.maketrans('', '', string.punctuation))
        tokens = clean_text.lower().split()
        
        for word in tokens:
            if word in stop_words:
                continue
                
            if word not in index:
                index[word] = []
            if doc_id not in index[word]:
                index[word].append(doc_id)
    
    return index

docs = ["The cat.", "The dog!"]
print(create_index(docs))
```

Output:
```
{'cat': [0], 'dog': [1]}
```
