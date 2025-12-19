### One way to solve it:

```python
import random

quiz = [
    {"q": "2 + 2?", "a": "4"},
    {"q": "Capital of France?", "a": "Paris"},
    {"q": "Opposite of Up?", "a": "Down"}
]

random.shuffle(quiz)
print("--- RANDOM QUIZ TIME ---")

for item in quiz:
    print("Question:", item["q"])
    guess = input("Answer: ")
    if guess == item["a"]:
        print("Correct!")
    else:
        print("Wrong.")
    print("-")
```
