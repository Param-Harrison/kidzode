# User Input (Simulation)

In a real game, players type answers.
We simulate it with a variable `user_input`.

```python
question = "What is 10 + 10?"
correct_answer = "20"

# Change this to test!
user_input = "20" 

if user_input == correct_answer:
    print("You got it!")
else:
    print("Try again!")
```

**Pro Tip:** In real Python, we use `input()`, but here we use variables!

## Try This!
Change `user_input` to "50" to see the "Try again" message.
