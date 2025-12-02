# Chatbot Answers Questions

Perfect, Personal Assistant Creator! Your bot remembers names!
But chatbots should answer QUESTIONS too!
Can you make it respond to common questions?

## 🎯 Today's Mission
Add question-answering abilities to your chatbot!

## 📚 Before You Start
You know how to use multiple `elif` statements.

## Let's Do It!
1. Read the code - see all the questions it can answer!
2. Press the green **Run** button
3. Ask it questions!

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

# Respond to questions and greetings
if user_input == "hello":
    print(f"Bot: Hello, {user_name}!")
elif user_input == "how are you":
    print("Bot: I'm doing great! Thanks for asking!")
elif user_input == "what is your name":
    print("Bot: My name is ChatBot 3000!")
elif user_input == "what can you do":
    print("Bot: I can chat with you, answer questions, and tell jokes!")
elif user_input == "how old are you":
    print("Bot: I was created today, so I'm brand new!")
elif user_input == "goodbye":
    print(f"Bot: Goodbye, {user_name}!")
else:
    print("Bot: I'm not sure how to answer that yet. Try asking something else!")
```

## ✨ Magic Moment
Your chatbot can now answer lots of different questions!

## 💡 Important Things to Remember
- Each `elif` checks for a different question
- Questions should be exact matches (for now)
- You can add as many questions as you want
- The `else` handles unknown questions gracefully

## 🎨 Try This Next!
Add more questions like "what is your favorite color" or "where do you live"!

## 🤔 Stuck? Check This!
- **Bot doesn't understand?** Make sure you type the question exactly
- **Want more questions?** Just add more `elif` blocks!
- **Tired of exact matching?** We'll improve this in the next lesson!

## 🌟 Show Your Parents!
"Look! My chatbot can answer questions now - it's getting smarter!"

You just unlocked the **Question Answering Bot** superpower! ⭐
