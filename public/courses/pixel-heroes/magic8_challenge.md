# Challenge: Fortune Categories

Challenge time! Make three lists: one for yes answers, one for no, and one for maybe. Then let the user choose which type they want!

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
# HINT: Use if/elif/else
# HINT: If answer_type == "yes", use random.choice(yes_fortunes)

print("The Magic 8-Ball says...")
# Add your code here!
```

**The trick:** Use `if/elif/else` to check what the user typed. If they type "yes", pick from `yes_fortunes`. If "no", pick from `no_fortunes`. Remember: `==` checks if things are equal!

Want to make it harder? Add a "funny" category with silly answers!
