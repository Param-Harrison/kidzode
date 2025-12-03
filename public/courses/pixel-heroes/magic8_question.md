# Ask a Question

Make your Magic 8-Ball ask for a question first!

## What to Do
1. Press Run
2. Type your question
3. Press Enter

```python
import random

# Ask for a question
question = input("Ask the Magic 8-Ball a yes/no question: ")

# List of fortunes
fortunes = ["Yes, definitely!", "No way!", "Maybe later!"]

# Pick one randomly
answer = random.choice(fortunes)

print("The Magic 8-Ball says...")
print(answer)
```

## Remember
- `input()` lets you type
- The answer is still random!

## Try This
Show the question: `print("You asked: " + question)`

## If Stuck
- Make sure `input()` is there
- Check `import random` at top

You did it! ⭐
