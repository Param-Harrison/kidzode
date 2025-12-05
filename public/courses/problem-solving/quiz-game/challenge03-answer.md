# Solution

```python
quiz_data = {
    "question": "What is the fastest animal?",
    "options": ["A: Turtle", "B: Cheetah", "C: Snail"],
    "answer": "B"
}

print(quiz_data["question"])
for opt in quiz_data["options"]:
    print(opt)

user_input = "B" # Pretend user typed B

if user_input == quiz_data["answer"]:
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
