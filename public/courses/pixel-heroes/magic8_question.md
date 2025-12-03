# Ask a Question

Now make your Magic 8-Ball ask for a question first! Press Run, type your question, then press Enter.

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

**Fun fact:** Even though you ask a question, the answer is still random! The Magic 8-Ball doesn't really know - it just picks randomly.

Try showing the question back: `print("You asked: " + question)`
