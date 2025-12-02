# Chatbot Responds to Greetings

Welcome, Complete Game Developer! You've built incredible games!
Now let's create something FRIENDLY - a personal chatbot!
Can you make a bot that responds to greetings?

## 🎯 Today's Mission
Create a chatbot that responds to different greetings!

## Let's Do It!
1. Read the code - see how the bot responds!
2. Press the green **Run** button
3. Try different greetings!

```python
print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Get user input
user_input = input("You: ")

# Respond to different greetings
if user_input == "hello":
    print("Bot: Hello! Nice to meet you!")
elif user_input == "hi":
    print("Bot: Hi there! How are you?")
elif user_input == "hey":
    print("Bot: Hey! What's up?")
elif user_input == "goodbye":
    print("Bot: Goodbye! See you later!")
else:
    print("Bot: I'm not sure how to respond to that yet!")
```

## ✨ Magic Moment
Your chatbot can respond to different greetings!

## 💡 Important Things to Remember
- `elif` means "else if" - it checks another condition
- We can have as many `elif` as we need
- The bot matches exact text (case-sensitive!)
- `else` handles anything we didn't plan for

## 🎨 Try This Next!
Add more greetings like "good morning" or "howdy"!

## 🤔 Stuck? Check This!
- **Bot always says "not sure"?** Make sure you type exactly: hello, hi, hey, or goodbye
- **Case matters!** "Hello" and "hello" are different
- **Want more responses?** Add more `elif` blocks!

## 🌟 Show Your Parents!
"Look! I made a chatbot that can talk to me!"

You just unlocked the **Chatbot Creator** superpower! ⭐
