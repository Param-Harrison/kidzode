# Add More Fortunes

Give your Magic 8-Ball more answers! Press Run, then run it many times to see all the different answers.

```python
import random

question = input("Ask the Magic 8-Ball a yes/no question: ")

# Big list of fortunes
fortunes = [
    "Yes, definitely!",
    "No way!",
    "Maybe later!",
    "Ask again tomorrow!",
    "The stars say yes!",
    "Don't count on it!",
    "Absolutely!",
    "Not a chance!"
]

answer = random.choice(fortunes)

print("The Magic 8-Ball says...")
print(answer)
```

**Tip:** Lists can have as many items as you want! Put each on its own line and add commas between them. This makes it easier to read and add more.

Add your own fortunes - make them funny, serious, or silly!
