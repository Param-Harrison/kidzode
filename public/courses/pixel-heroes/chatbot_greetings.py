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
