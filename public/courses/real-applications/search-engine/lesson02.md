# Breaking it Down (Tokenization)

Before we index, we need to split text into words.
This is called **Tokenization**.

"Hello World!" -> ["Hello", "World"]

```python
text = "Python is fun and python is easy"

# 1. Lowercase (normalization)
clean_text = text.lower()

# 2. Split (tokenization)
tokens = clean_text.split()

print(tokens)
```

You'll see: `['python', 'is', 'fun', 'and', 'python', 'is', 'easy']`.
Now we have building blocks! 🧱

## Try This!
Tokenize "I love Pizza!" (Don't worry about punctuation yet).
