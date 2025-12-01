# Teach Your Robot to Remember Your Name

Your robot can ask questions, but it forgets your answer right away!
That's not very smart, is it?
Let's teach your robot to remember your name in a memory box so it can use it later!

## 🎯 Today's Mission
Make your robot remember AND use your name multiple times!

## 📚 Before You Start
You know how to use `input()` to ask questions and how variables work as memory boxes.

## Let's Do It!
1. Press the green **Run** button
2. Type your name when the robot asks
3. Watch the robot use your name THREE times!

```python
# Robot introduction
print("Hi! I'm a friendly robot!")

# Ask for name AND store it in a memory box
name = input("What's your name? ")

# Now the robot can use your name many times!
print("Hello, " + name + "! It's nice to meet you!")
print("I will remember your name, " + name + "!")
print("Goodbye, " + name + "! Come back soon!")
```

## ✨ Magic Moment
Your robot remembers your name and uses it THREE times in the conversation!

## 💡 Important Things to Remember
- `name = input("question")` asks a question AND stores the answer
- The `=` sign puts the answer into the memory box called `name`
- You can use the memory box many times in your code
- Use `+` to glue the name together with other text

## 🎨 Try This Next!
Add a fourth line where the robot uses your name again!

## 🤔 Stuck? Check This!
- **Error: name is not defined?** Make sure you have `name = input(...)` before using `name`
- **Robot doesn't use my name?** Check that you're using `+ name +` to insert it
- **Weird spacing?** Make sure you have spaces inside your quotes: `"Hello, " + name`

## 🌟 Show Your Parents!
"Look! My robot has a memory now - it remembers my name and uses it!"

You just unlocked the **Memory Robot** superpower! ⭐