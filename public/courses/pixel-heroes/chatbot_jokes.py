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
