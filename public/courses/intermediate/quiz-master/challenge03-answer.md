# Answer: Quiz with Pass/Fail ✅

```python
quiz = [{"question": "...", "answer": "..."}]

score = 0
for q in quiz:
    print(q["question"])
    answer = input("Answer: ")
    if answer.lower() == q["answer"].lower():
        score = score + 1

if score >= 3:
    print("PASSED! 🎉")
else:
    print("Try again! 📚")
```
