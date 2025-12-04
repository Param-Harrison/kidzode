# Print Options Nicely

`['A: Apple', ...]` looks ugly. Let's loop!

```python
q = {
    "question": "Best fruit?",
    "options": ["A: Apple", "B: Banana", "C: Cherry"],
    "answer": "A"
}

print(q["question"])
for opt in q["options"]:
    print(opt)
```

You'll see:
```
Best fruit?
A: Apple
B: Banana
C: Cherry
```

Much better!

## Try This!
Change the question to "Best color?" and update options!
