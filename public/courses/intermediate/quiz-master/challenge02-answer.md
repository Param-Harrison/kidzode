### One way to solve it:

```python
q = {
    "question": "What is the fastest animal?",
    "answer": "Cheetah",
    "hint": "It's a big cat with spots!"
}

print(q["question"])
print("(Type HINT for a clue)")

while True:
    guess = input("Answer: ")
    
    if guess == "HINT":
        print("HINT:", q["hint"])
    elif guess == q["answer"]:
        print("✅ Correct!")
        break
    else:
        print("❌ Try again!")
```
