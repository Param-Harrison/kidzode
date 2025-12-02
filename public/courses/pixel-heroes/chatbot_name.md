# Chatbot Remembers Your Name

Great, Chatbot Creator! Your bot can greet people!
But a good chatbot remembers your NAME!
Can you make it ask for and remember your name?

## 🎯 Today's Mission
Make your chatbot remember and use your name!

## 📚 Before You Start
You know how to use variables and `if/elif/else` statements.

## Let's Do It!
1. Read the code - see how it remembers names!
2. Press the green **Run** button
3. Tell it your name!

```python
print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Ask for name
user_name = input("Bot: What's your name? ")

print(f"Bot: Nice to meet you, {user_name}!")
print()

# Get user input
user_input = input("You: ")

# Respond using their name
if user_input == "hello":
    print(f"Bot: Hello, {user_name}! How can I help you?")
elif user_input == "hi":
    print(f"Bot: Hi, {user_name}! What would you like to talk about?")
elif user_input == "goodbye":
    print(f"Bot: Goodbye, {user_name}! Come back soon!")
else:
    print(f"Bot: I'm listening, {user_name}!")
```

## ✨ Magic Moment
The chatbot uses your name in every response - it feels personal!

## 💡 Important Things to Remember
- We store the name in a variable: `user_name`
- We use f-strings to include the name: `f"Hello, {user_name}!"`
- The name can be used in every response
- This makes the chatbot feel more friendly!

## 🎨 Try This Next!
Ask for their age too and use it in responses!

## 🤔 Stuck? Check This!
- **Name not showing?** Make sure you're using f-strings with `f""`
- **Forgot the name?** Check that you stored it in `user_name`
- **Want more personalization?** Ask for favorite color, hobby, etc!

## 🌟 Show Your Parents!
"Look! My chatbot remembers my name and uses it when talking to me!"

You just unlocked the **Personal Assistant Creator** superpower! ⭐
