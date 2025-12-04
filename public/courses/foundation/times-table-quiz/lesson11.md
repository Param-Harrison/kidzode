# The Grader

Let's write code to grade your quiz!

We'll loop through the questions and check your answers.

```python
questions = ["2 x 2", "3 x 3", "4 x 4"]
correct_answers = [4, 9, 16]
my_answers = [4, 0, 16] # Middle one is wrong!

for i in range(3):
    if my_answers[i] == correct_answers[i]:
        print(f"Q{i+1}: Correct! ✅")
    else:
        print(f"Q{i+1}: Wrong! ❌")
```

You'll see:
```
Q1: Correct! ✅
Q2: Wrong! ❌
Q3: Correct! ✅
```

It checks every single answer for you!

**How it works:**
- `i` goes 0, 1, 2
- It compares `my_answers[0]` with `correct_answers[0]`, and so on.

## Try This!
Fix the middle answer in `my_answers` to get all green checks!
