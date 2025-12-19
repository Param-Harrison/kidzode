# Boring Words (Stop Words)

Words like "the", "is", "and" are everywhere.
They make our index huge and useless.
We filter them out!

```python
stop_words = ["is", "and", "the", "a"]

text = "the python is a snake"
tokens = text.split()

filtered = []
for word in tokens:
    if word not in stop_words:
        filtered.append(word)

print(filtered)
```

You'll see: `['python', 'snake']`.
Only the important stuff remains! 💎

## Try This!
Filter the sentence "To be or not to be".
