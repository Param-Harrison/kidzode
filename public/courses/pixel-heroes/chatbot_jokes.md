# Chatbot Tells Random Jokes

Excellent, Question Answering Bot! Your chatbot is smart!
But chatbots should be FUN too!
Can you make it tell random jokes?

## 🎯 Today's Mission
Add joke-telling abilities with random selection!

## 📚 Before You Start
You know how to use `random.choice()` and lists.

## Let's Do It!
1. Read the code - see the joke feature!
2. Press the green **Run** button
3. Ask for a joke!

```python
import random

print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Joke database
jokes = [
    "Why did the programmer quit? Because they didn't get arrays!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "What's a computer's favorite snack? Microchips!",
    "Why was the computer cold? It left its Windows open!",
    "How do robots eat chips? One byte at a time!"
]

# Ask for name
user_name = input("Bot: What's your name? ")
print(f"Bot: Nice to meet you, {user_name}!")
print()

# Get user input
user_input = input("You: ")

# Respond to requests
if user_input == "hello":
    print(f"Bot: Hello, {user_name}!")
elif user_input == "tell me a joke":
    joke = random.choice(jokes)
    print(f"Bot: {joke}")
elif user_input == "joke":
    joke = random.choice(jokes)
    print(f"Bot: {joke}")
elif user_input == "how are you":
    print("Bot: I'm great! Want to hear a joke?")
elif user_input == "goodbye":
    print(f"Bot: Goodbye, {user_name}! Thanks for chatting!")
else:
    print("Bot: Try saying 'tell me a joke' or 'hello'!")
```

## ✨ Magic Moment
Your chatbot can tell random jokes - different every time!

## 💡 Important Things to Remember
- We store jokes in a list
- `random.choice(jokes)` picks a random joke
- Each time you ask, you might get a different joke
- This makes the chatbot more entertaining!

## 🎨 Try This Next!
Add your own jokes to the list! Make them funny!

## 🤔 Stuck? Check This!
- **Same joke every time?** That's just luck - ask again!
- **No jokes?** Make sure you type "tell me a joke" or "joke"
- **Want more jokes?** Add more to the `jokes` list!

## 🌟 Show Your Parents!
"Look! My chatbot can tell jokes - and they're different every time!"

You just unlocked the **Entertainment Bot** superpower! ⭐
