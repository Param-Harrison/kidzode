# Make a Magic 8-Ball

Create your own fortune teller! Ask it questions and get random answers.

Press Run, then run it again - you'll get different fortunes each time!

```python
import random

# List of fortunes
fortunes = ["Yes, definitely!", "No way!", "Maybe later!"]

# Pick one randomly
answer = random.choice(fortunes)

print("The Magic 8-Ball says...")
print(answer)
```

**How it works:** `import random` gives you random powers! The list `fortunes` holds all the possible answers, and `random.choice()` picks one randomly.

Add your own fortunes to the list - make them silly, serious, or fun!
