# The Score

Let's count how many you got right!

We need a `score` variable.

```python
score = 0
# ... (setup lists) ...

for i in range(3):
    if my_answers[i] == correct_answers[i]:
        print("Correct!")
        score = score + 1
    else:
        print("Wrong!")

print(f"Final Score: {score}/3")
```

Now you get a grade!

**How it works:**
- Start `score` at 0
- Every time you're right, add 1 (`score = score + 1`)
- Print the total at the end!

## Try This!
Can you get 3/3?
