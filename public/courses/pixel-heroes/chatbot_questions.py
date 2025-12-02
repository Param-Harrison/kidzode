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
