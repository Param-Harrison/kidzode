# Solution

```python
quiz = [
    {"q": "What is 2+2?", "a": "4"},
    {"q": "What is 5+5?", "a": "10"},
    {"q": "What is 10+10?", "a": "20"}
]
answers = ["4", "10", "20"] # All correct!
score = 0

for i in range(len(quiz)):
    print(f"Q: {quiz[i]['q']}")
    
    if answers[i] == quiz[i]['a']:
        print("Correct! ✅")
        score = score + 1
    else:
        print("Wrong! ❌")

print("-" * 20)
print(f"Final Score: {score}/{len(quiz)}")
if score == len(quiz):
    print("YOU WIN! 🏆")
```

Output:
```
Q: What is 2+2?
Correct! ✅
...
Final Score: 3/3
YOU WIN! 🏆
```

You are a Game Developer! 🎮
