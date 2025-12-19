# Solution

```python
text = "The quick brown fox jumps over the lazy dog"

print("--- ANALYSIS ---")
print(f"Length: {len(text)}")
print(f"Words: {len(text.split())}")

# Convert to lower so we count "The" and "the"
the_count = text.lower().count("the")
print(f"'the' count: {the_count}")
```

Output:
```
--- ANALYSIS ---
Length: 43
Words: 9
'the' count: 2
```

You built a text analysis engine! 🕵️‍♀️
