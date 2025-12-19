# Remove Duplicates

Too many repeated words? Let's fix it!

```python
text = "apple apple banana apple"
words = text.split()

# Sets remove duplicates automatically!
unique_words = list(set(words))

print(unique_words)
```

You'll see:
```
['banana', 'apple']
```

**Note:** Sets don't keep the order!

## Try This!
Remove duplicates from "dog cat dog bird"!
