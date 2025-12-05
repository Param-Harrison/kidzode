# Searching a Phrase

"hello world" usually means "hello" AND "world".
Let's search for a phrase!

1. Split query: `["hello", "world"]`
2. Get IDs for "hello": `{1, 2}`
3. Get IDs for "world": `{2, 3}`
4. Intersect: `{2}`

```python
index = {
    "hello": {1, 2},
    "world": {2, 3}
}

def search_and(query):
    words = query.lower().split()
    
    # Start with ALL docs (or first word's docs)
    results = index.get(words[0], set())
    
    for w in words[1:]:
        results = results & index.get(w, set())
        
    return results

print(search_and("hello world"))
```

## Try This!
Search for "hello world python" (add "python" to index first!).
