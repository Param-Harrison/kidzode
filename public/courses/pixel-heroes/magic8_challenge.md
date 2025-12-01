# Fortune Categories Challenge

You're a Magic 8-Ball master now!
But can you make it even MORE magical?
What if you had different types of fortunes - yes answers, no answers, and maybe answers?

## 🎯 Today's Mission
Create THREE separate fortune lists and pick from the right one!

## 📚 Before You Start
You know how to create lists and use `random.choice()` to pick random items.

## Your Challenge!
1. Create three separate lists: yes fortunes, no fortunes, and maybe fortunes
2. Ask the user what type of answer they want
3. Pick a random fortune from the right list!

```python
import random

# Create three different fortune lists
yes_fortunes = ["Yes, definitely!", "Absolutely!", "The stars say yes!"]
no_fortunes = ["No way!", "Don't count on it!", "Not a chance!"]
maybe_fortunes = ["Maybe later!", "Ask again tomorrow!", "Cannot predict now!"]

# Ask what type of answer they want
print("What type of answer do you want?")
answer_type = input("Type 'yes', 'no', or 'maybe': ")

# Ask their question
question = input("Now ask your yes/no question: ")

# Pick from the right list
# HINT: Use if/elif/else to check answer_type
# HINT: If answer_type == "yes", use random.choice(yes_fortunes)

print("The Magic 8-Ball says...")
# Add your code here to print the right fortune!

```

## ✨ Magic Moment
Your Magic 8-Ball can give different TYPES of answers based on what the user wants!

## 💡 Important Things to Remember
- You can create as many lists as you need
- Use `if/elif/else` to choose which list to use
- `==` checks if two things are equal
- Make sure to compare with the exact text: `"yes"` not `"Yes"`

## 🎨 Try This Next!
- Add a fourth category like "funny" fortunes
- Make it work even if the user types "YES" or "Yes"
- Add more fortunes to each category

## 🤔 Stuck? Check This!
- **All answers from one list?** Check your `if` statements
- **Error: list is not defined?** Make sure you created all three lists
- **Not working?** Make sure you type exactly "yes", "no", or "maybe" (lowercase)
- **Need help with if/else?** Look back at your Choose-Your-Own-Adventure lessons!

## 🌟 Show Your Parents!
"Look! My Magic 8-Ball has categories now - I can choose what type of answer I want!"

You just unlocked the **Fortune Category Master** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 3! 🎉
