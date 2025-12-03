# Chatbot Responds to Greetings

Create a chatbot that responds to different greetings!

## What to Do
1. Press Run
2. Try different greetings!

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

## Remember
- `elif` means "else if" - checks another condition
- Can have as many `elif` as needed
- Bot matches exact text (case-sensitive!)
- `else` handles anything else

## Try This
Add more greetings like "good morning"!

## If Stuck
- Type exactly: hello, hi, hey, or goodbye
- Case matters! "Hello" and "hello" are different

You did it! ⭐
