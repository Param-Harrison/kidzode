# Showing Snippets

We don't show the whole book! Just the text *around* the match.
We can slice the string.

```python
text = "A long time ago in a galaxy far far away..."
query = "galaxy"

idx = text.find(query)
if idx != -1:
    start = max(0, idx - 10)
    end = min(len(text), idx + 10 + len(query))
    snippet = "..." + text[start:end] + "..."
    print(snippet)
```

You'll see: `...go in a galaxy far far...`.

## Try This!
Adjust the window size to 20 characters!
