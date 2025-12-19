# Make Decisions with Code

Let's combine lists and decisions!

```python
import random

weather = ["Sunny", "Rainy"]
today = random.choice(weather)

print(f"Today is {today}")

if today == "Sunny":
    print("Let's go to the park!")
else:
    print("Let's read a book inside.")
```

Your code reacts to the random choice! This is how game logic works!

## Try This!
Add "Snowy" to the list and an `elif` (else if) for it!
