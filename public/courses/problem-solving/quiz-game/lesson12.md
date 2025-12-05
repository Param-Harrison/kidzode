# Print Options Nicely

`['A: Apple', ...]` looks ugly. Let's loop!

```python
quiz_data = {
    "question": "Best fruit?",
    "options": ["A: Apple", "B: Banana", "C: Cherry"],
    "answer": "A"
}

print(quiz_data["question"])
for opt in quiz_data["options"]:
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
