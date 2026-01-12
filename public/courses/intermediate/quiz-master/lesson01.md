# The Quiz Bank 🎯

## Your Mission
Challenge your friends with trivia! Today we're building a quiz game that asks questions and tracks your score.

## Storing Questions
We can use a list of dictionaries to store quiz questions:

```python
quiz = [
    {"question": "What color is the sky?", "answer": "blue"},
    {"question": "2 + 2 = ?", "answer": "4"}
]
```

Each question has:
- A `question` to ask
- An `answer` to check against

## Getting Questions
```python
quiz[0]["question"]  # "What color is the sky?"
quiz[0]["answer"]    # "blue"
```

## Try It!
1. Run the code
2. See the first question and its answer
3. Try adding a new question!

## What You Learned
✅ Lists can contain dictionaries
✅ Each item is one complete question
✅ Easy to add more questions!
