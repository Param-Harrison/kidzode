# Asking Questions 🤔

## Quick Reminder
You stored questions in a list of dictionaries. Now let's ask them!

## Your Mission
Create a function that takes a question, asks the user, and checks if they're right!

## The Pattern
```python
def ask_question(q):
    print(q["question"])
    user_answer = input("Your answer: ")
    
    if user_answer == q["answer"]:
        print("Correct! ✅")
    else:
        print("Wrong! The answer was:", q["answer"])
```

## Try It!
1. Run the code
2. Answer the question
3. See if you got it right!

## What You Learned
✅ Functions can take a dictionary as input
✅ Check answers with `if` statements
✅ Give feedback on right/wrong answers
