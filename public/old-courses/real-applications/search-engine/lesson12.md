# Highlighting Results

When Google shows results, it **bolds** the keyword.
We can do that with `.replace()`!

```python
def highlight(text, query):
    # Case insensitive replace is hard, let's keep it simple
    return text.replace(query, f"**{query}**")

doc = "I like python programming"
print(highlight(doc, "python"))
```

You'll see: `"I like **python** programming"`.

## Try This!
Handle casing (e.g. highlight "Python" even if query is "python").
Hint: Regex or lowercasing.
