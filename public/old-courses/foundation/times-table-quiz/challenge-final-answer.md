# Solution

```python
questions = ["Capital of France?", "5 + 5?", "Fastest animal?"]
correct = ["Paris", "10", "Cheetah"]
player = ["Paris", "10", "Lion"] # One wrong!

score = 0

for i in range(3):
    print(f"Question: {questions[i]}")
    print(f"You answered: {player[i]}")
    
    if player[i] == correct[i]:
        print("Correct! ✅")
        score = score + 1
    else:
        print(f"Wrong! ❌ The answer was {correct[i]}")
    print("-" * 20)

print(f"Final Score: {score}/3")
```

You built a complete quiz engine! 🎓
