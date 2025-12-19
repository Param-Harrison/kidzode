# Finding Documents

Now we have an `index`. Let's use it!
We just look up the word.

```python
index = {"cat": [1, 2], "dog": [2, 3]}

def search(query):
    query = query.lower()
    if query in index:
        return index[query]
    else:
        return []

print(f"Searching 'cat': {search('Cat')}")
```

You'll see: `[1, 2]`. Simple O(1) lookup!

## Try This!
Search for a missing word like "Bird". It should return `[]`.
