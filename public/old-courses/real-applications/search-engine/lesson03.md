# Building the Index

Let's automate it!
We loop through documents and add words to our dictionary.

```python
documents = {
    1: "Python is fun",
    2: "Java is hard",
    3: "Python is snake"
}

index = {}

for doc_id, text in documents.items():
    tokens = text.lower().split()
    for word in tokens:
        # If word represents a new list, create it
        if word not in index:
            index[word] = []
        
        # Add doc_id if not there
        if doc_id not in index[word]:
            index[word].append(doc_id)

print(index)
```

You'll see: `"python": [1, 3]`.
We mapped the world! 🗺️

## Try This!
Add a 4th document "hard snake" and see the index update.
