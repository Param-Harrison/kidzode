# Count Specific Words

How many times do we say "happy"?

We can use `.count()` on a list!

```python
text = "happy happy joy joy"
words = text.split()

happy_count = words.count("happy")

print(f"Happy count: {happy_count}")
```

You'll see:
```
Happy count: 2
```

It counts for you!

## Try This!
Count "joy" in the sentence!
