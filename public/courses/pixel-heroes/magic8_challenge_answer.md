# Answer

Here's the complete solution:

```python
import random

# Three different lists
yes_fortunes = ["Yes, definitely!", "Absolutely!", "The stars say yes!"]
no_fortunes = ["No way!", "Don't count on it!", "Not a chance!"]
maybe_fortunes = ["Maybe later!", "Ask again tomorrow!", "Cannot predict now!"]

print("What type of answer do you want?")
answer_type = input("Type 'yes', 'no', or 'maybe': ")

question = input("Now ask your yes/no question: ")

# Pick from the right list
if answer_type == "yes":
    answer = random.choice(yes_fortunes)
elif answer_type == "no":
    answer = random.choice(no_fortunes)
elif answer_type == "maybe":
    answer = random.choice(maybe_fortunes)
else:
    answer = random.choice(yes_fortunes)  # Default to yes

print("The Magic 8-Ball says...")
print(answer)
```

**Remember:** Try solving it yourself first! Understanding how `if/elif/else` works is more important than just copying the answer. You can add more categories too!

