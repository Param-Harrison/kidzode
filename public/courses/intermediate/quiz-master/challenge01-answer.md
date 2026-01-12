# Answer: Super Quiz ✅

```python
quiz = [
    {"question": "What is 2 + 2?", "answer": "4"},
    {"question": "Capital of France?", "answer": "paris"}
]

score = 0

for q in quiz:
    print(q["question"])
    answer = input("Your answer: ")
    if answer.lower() == q["answer"].lower():
        print("Correct!")
        score = score + 1

print("Score:", score, "/", len(quiz))
```
