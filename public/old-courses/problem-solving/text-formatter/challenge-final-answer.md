# Solution

```python
def make_header(text, level):
    # Create the hashes
    hashes = "#" * level
    
    # Format the text
    formatted_text = text.strip().title()
    
    # Combine them
    return f"{hashes} {formatted_text}"

# Test it
print(make_header("  my cool title  ", 1))
print(make_header("subtitle here", 2))
```

Output:
```
# My Cool Title
## Subtitle Here
```

You built a Markdown engine! 📝
