# Chatbot Responds to Greetings

Create a chatbot that responds to different greetings! Press Run and try typing different greetings like "hello", "hi", "hey", or "goodbye".

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

**How it works:** `elif` means "else if" - it checks another condition. You can have as many `elif` as you need! The bot matches exact text (case-sensitive), so "Hello" and "hello" are different. `else` handles anything that doesn't match.

Add more greetings like "good morning", "good evening", or "what's up" - make your chatbot smarter!
