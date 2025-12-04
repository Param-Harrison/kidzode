# Check Answer

Let's check if the player is smart!

```python
qa = {"question": "2 + 2?", "answer": "4"}

print(qa["question"])
# Simulate user input
user_answer = "4" 

if user_answer == qa["answer"]:
    print("Correct! ✅")
else:
    print("Wrong! ❌")
```

You'll see:
```
Correct! ✅
```

We built a single-question quiz!

## Try This!
Change `user_answer` to "5" and see what happens!
