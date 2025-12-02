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
