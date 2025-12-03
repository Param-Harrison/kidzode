# Challenge: Fortune Categories

Make three lists: yes, no, and maybe fortunes!

## What to Do
1. Create three lists
2. Ask what type they want
3. Pick from the right list!

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

## Remember
- Use `if/elif/else` to choose
- `==` checks if equal
- Type exactly "yes", "no", or "maybe"

## Try This
Add a "funny" category!

## If Stuck
- Check your `if` statements
- Make sure all lists exist

**CHALLENGE COMPLETE!** 🎉
