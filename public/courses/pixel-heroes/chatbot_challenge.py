import random

print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Joke database
jokes = [
    "Why did the programmer quit? Because they didn't get arrays!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "What's a computer's favorite snack? Microchips!"
]

# Ask for name
user_name = input("Bot: What's your name? ")
print(f"Bot: Nice to meet you, {user_name}!")
print()

# Get user input
user_input = input("You: ")

# Mood detection using keyword checking
if "sad" in user_input or "unhappy" in user_input:
    print(f"Bot: I'm sorry you're feeling sad, {user_name}.")
    print("Bot: Want to hear a joke to cheer you up?")
elif "happy" in user_input or "great" in user_input or "good" in user_input:
    print(f"Bot: That's wonderful, {user_name}! I'm happy you're happy!")
elif "excited" in user_input or "amazing" in user_input:
    print(f"Bot: Wow! Your excitement is contagious, {user_name}!")
elif "angry" in user_input or "mad" in user_input:
    print(f"Bot: I understand you're upset, {user_name}. Want to talk about it?")
elif user_input == "tell me a joke" or user_input == "joke":
    joke = random.choice(jokes)
    print(f"Bot: {joke}")
elif user_input == "hello":
    print(f"Bot: Hello, {user_name}! How are you feeling today?")
elif user_input == "goodbye":
    print(f"Bot: Goodbye, {user_name}! Hope you feel better!")
else:
    print(f"Bot: I'm here for you, {user_name}. Tell me how you're feeling!")
