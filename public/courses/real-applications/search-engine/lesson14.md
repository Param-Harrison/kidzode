# Fuzzy Search (StartsWith)

Searching "run" should match "running".
We can filter tokens using `.startswith()`.

```python
index = {
    "run": {1},
    "running": {2},
    "runner": {3}
}

def search_partial(prefix):
    matches = set()
    for word in index:
        if word.startswith(prefix):
            matches.update(index[word]) # Add all IDs
    return matches

print(search_partial("run"))
```

You'll see: `{1, 2, 3}`.
This is how autocomplete works! ⌨️

## Try This!
Search for "co" in an index with "code", "cook", "apple".
