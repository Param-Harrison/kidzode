# Ask and Answer

Let's make it interactive (simulated)!

```python
quiz = [
    {"q": "2+2?", "a": "4"},
    {"q": "Cat says?", "a": "Meow"}
]

# Simulated answers
my_answers = ["4", "Woof"] 

for i in range(len(quiz)):
    print(f"Q: {quiz[i]['q']}")
    print(f"You said: {my_answers[i]}")
    
    if my_answers[i] == quiz[i]['a']:
        print("Correct!")
    else:
        print("Wrong!")
```

You'll see one Correct and one Wrong!

## Try This!
Fix the second answer to "Meow" to get 100%!
