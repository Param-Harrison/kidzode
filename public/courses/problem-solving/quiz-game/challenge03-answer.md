# Solution

```python
q = {
    "question": "What is the fastest animal?",
    "options": ["A: Turtle", "B: Cheetah", "C: Snail"],
    "answer": "B"
}

print(q["question"])
for opt in q["options"]:
    print(opt)

user_input = "B" # Pretend user typed B

if user_input == q["answer"]:
    print("Correct!")
else:
    print("Wrong!")
```

Output:
```
What is the fastest animal?
A: Turtle
B: Cheetah
C: Snail
Correct!
```

You built a trivia engine! 🏆
