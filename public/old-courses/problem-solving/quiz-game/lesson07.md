# Loop Through Questions

Now we can loop through the WHOLE quiz!

```python
quiz = [
    {"q": "2+2?", "a": "4"},
    {"q": "3+3?", "a": "6"}
]

for item in quiz:
    print(item["q"])
```

You'll see:
```
2+2?
3+3?
```

It prints every question automatically!

**How it works:** `item` becomes each dictionary one by one.

## Try This!
Add a 3rd question to the list and run it!
