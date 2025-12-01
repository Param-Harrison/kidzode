# Ask the Magic 8-Ball a Question

Great work, Fortune Teller! Your Magic 8-Ball gives random answers!
But a real Magic 8-Ball lets you ASK a question first!
Let's make it more interactive!

## 🎯 Today's Mission
Make your Magic 8-Ball ask for your question before giving an answer!

## 📚 Before You Start
You know how to use `random.choice()` to pick random items from a list.

## Let's Do It!
1. Read the new code below
2. Press the green **Run** button
3. Type your yes/no question
4. Press **Enter** to see your fortune!

```python
import random

# Ask the user for their question
question = input("Ask the Magic 8-Ball a yes/no question: ")

# Create a list of possible fortunes
fortunes = ["Yes, definitely!", "No way!", "Maybe later!"]

# Pick one fortune randomly
answer = random.choice(fortunes)

# Show the fortune
print("The Magic 8-Ball says...")
print(answer)
```

## ✨ Magic Moment
Now you can ask ANY question and get a magical answer!

## 💡 Important Things to Remember
- `input()` lets the user type their question
- We store the question in a variable, but we don't use it yet (that's okay!)
- The fortune is still random - it doesn't matter what you ask
- Real Magic 8-Balls work the same way!

## 🎨 Try This Next!
Try using the question in the output: `print("You asked: " + question)`

## 🤔 Stuck? Check This!
- **No question prompt?** Make sure you have the `input()` line
- **Error: random is not defined?** Check that `import random` is at the top
- **Same fortune every time?** That's just luck - keep trying!

## 🌟 Show Your Parents!
"Look! My Magic 8-Ball asks me questions now - just like a real one!"

You just unlocked the **Interactive Fortune Teller** superpower! ⭐
