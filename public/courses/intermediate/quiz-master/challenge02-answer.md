# Answer: Random Quiz ✅

```python
import random

quiz = [{"question": "...", "answer": "..."}]

random.shuffle(quiz)

score = 0
for q in quiz:
    print(q["question"])
    answer = input("Answer: ")
    if answer.lower() == q["answer"].lower():
        score = score + 1

print("Score:", score)
```
